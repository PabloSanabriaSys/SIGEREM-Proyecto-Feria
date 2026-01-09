import cv2
import mediapipe as mp
import numpy as np
import time
import torch
from torch.autograd import Variable
import torch.nn.functional as rna
import base64
from fastapi import WebSocket
import logging

"""_summary_

Returns:
    nombres = {
    0: "xd",
    1:"figura8",
    2:"figura9",
    3:"figura19",
    4:"figura20",
    5:"figura21",
    6:"figura34",
    7:"figura56",
    8:"figura57",
    9:"figura68",
    10:"figura69",
    11:"figura130",
    12:"figura131",
    13:"figura166",
    100: "No se detectó ningún gesto"
    }
"""

logger = logging.getLogger(__name__)


class Reconocimiento:
    def __init__(self):
        self.mp_face_detection = mp.solutions.face_detection
        self.mp_drawing = mp.solutions.drawing_utils
        self.mp_hands = mp.solutions.hands
        
        self.tiempo_ini = time.time()
        self.nariz_x, self.nariz_y = 0, 0
        self.boca_x, self.boca_y = 0, 0
        self.x_coordinates, self.y_coordinates = None, None
        self.prediccion = "No detectado"
        self.model_ft = None
        self.hands = None
        self.face_detection = None

    def calcular_distancia(self):
        return np.sqrt((self.boca_x - self.nariz_x)**2 + (self.boca_y - self.nariz_y)**2)

    def calcular_proporcion(self, x_coordinates, y_coordinates, distancia_referencia):
        distancias = np.sqrt((x_coordinates - self.nariz_x)**2 + (y_coordinates - self.nariz_y)**2)
        proporcion = distancias / distancia_referencia
        return proporcion
    
    def pintar_cara(self,frame,detection,width,height):
        self.nariz_x = int(detection.location_data.relative_keypoints[2].x * width)
        self.nariz_y = int(detection.location_data.relative_keypoints[2].y * height)
        # Centro de la boca
        self.boca_x = int(self.mp_face_detection.get_key_point(detection, self.mp_face_detection.FaceKeyPoint.MOUTH_CENTER).x * width)
        self.boca_y = int(self.mp_face_detection.get_key_point(detection, self.mp_face_detection.FaceKeyPoint.MOUTH_CENTER).y * height)
        cv2.circle(frame, (self.boca_x, self.boca_y), 3, (0, 255, 255), 10)
        cv2.circle(frame, (self.nariz_x, self.nariz_y), 3, (0, 255, 255), 10)

    def pintar_mano(self,frame,hand_landmarks):
        self.mp_drawing.draw_landmarks(
        frame, hand_landmarks, self.mp_hands.HAND_CONNECTIONS,
        self.mp_drawing.DrawingSpec(color=(0, 255, 255), thickness=3, circle_radius=5),
        self.mp_drawing.DrawingSpec(color=(0, 0, 255), thickness=4, circle_radius=5))
      
    def posicionar(self,x_coordinates,y_coordinates):
        self.x_coordinates = x_coordinates- self.nariz_x
        self.y_coordinates = y_coordinates- self.nariz_y  
        
    def recuperar_coordenadas(self, hand_landmarks, width, height):
        x_coordinates = np.array([int(landmark.x * width) for landmark in hand_landmarks.landmark])
        y_coordinates = np.array([int(landmark.y * height) for landmark in hand_landmarks.landmark])

        self.posicionar(x_coordinates,y_coordinates)

    def normalizar(self, distancia_referencia):
        self.x_coordinates = self.x_coordinates/distancia_referencia
        self.y_coordinates = self.y_coordinates/distancia_referencia
        
    def contar_manos(self, modelo):
        if modelo is not None:
            self.model_ft = torch.load(modelo)
            input_layer_parameters = next(self.model_ft.parameters())
            input_size = input_layer_parameters.size()[-1]
            max_manos = int(input_size/42)
            return max_manos
        
        
    def predecir(self, frame, max_manos):
        height, width, _ = frame.shape
        frame = cv2.flip(frame, 1)
        frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        # Face
        results_face = self.face_detection.process(frame_rgb)
        # Hands
        results = self.hands.process(frame_rgb)

        if results.multi_hand_landmarks is not None and results_face.detections is not None:
            for detection in results_face.detections:
                self.pintar_cara(frame, detection, width, height)
                break

            cont = 0
            for hand_landmarks in results.multi_hand_landmarks:
                cont+=1
                self.recuperar_coordenadas(hand_landmarks, width, height)

                self.pintar_mano(frame,hand_landmarks)
                distancia_referencia = self.calcular_distancia()
                self.normalizar( distancia_referencia)
                if (time.time() - self.tiempo_ini >= 0.5):
                    if len(results.multi_hand_landmarks)==1:
                        aux = np.concatenate((self.x_coordinates, self.y_coordinates),axis=None).reshape(1,-1)
                        aux = np.concatenate((aux, np.zeros((1,aux.shape[1]))),axis=1).reshape(1,-1) 
                        i = torch.Tensor(aux.reshape(1, -1))
                        i = Variable(i)
                        predict = rna.softmax(self.model_ft(i), dim=1)
                        self.prediccion = predict.argmax().item()
                        self.tiempo_ini = time.time() 
                        break ## Esto es nuevo, deberia solucionar bugs
                    
                    elif cont==2:
                        
                        if(results.multi_handedness[0].classification[0].label=="Right"):
                            aux_x = np.concatenate((aux_x, self.x_coordinates),axis=None) 
                            aux_y = np.concatenate((aux_y, self.y_coordinates),axis=None)
                        else:
                            aux_x = np.concatenate((self.x_coordinates, aux_x),axis=None) 
                            aux_y = np.concatenate((self.y_coordinates, aux_y),axis=None)
                            
                        aux = np.concatenate((aux_x, aux_y),axis=None).reshape(1,-1) 
                        i = torch.Tensor(aux.reshape(1, -1))
                        i = Variable(i)
                        predict = rna.softmax(self.model_ft(i), dim=1)
                        self.prediccion = predict.argmax().item()
                        self.tiempo_ini = time.time()
                aux_x,aux_y = self.x_coordinates, self.y_coordinates 
        else:
            self.prediccion = 100
            
    def inicializar_modelos(self, max_manos=1):
        self.hands = self.mp_hands.Hands(
            static_image_mode=False,
            max_num_hands=max_manos,
            min_detection_confidence=0.5)
        self.face_detection = self.mp_face_detection.FaceDetection(
            min_detection_confidence=0.9)
    
    def iniciar_local(self, max_manos=1, modelo=None):
        max_manos = self.contar_manos(modelo)
        self.cap = cv2.VideoCapture(0)
        try:
            with self.mp_hands.Hands(
                static_image_mode=False,
                max_num_hands=max_manos,
                min_detection_confidence=0.5) as self.hands:
                with self.mp_face_detection.FaceDetection(
                        min_detection_confidence=0.9) as self.face_detection:
                    while self.cap.isOpened():
                        ret, frame = self.cap.read()
                        #frame = cv2.flip(frame, 1)
                        if not ret:
                            break                   
                        self.predecir(frame)
                        
                        # Mostrar predicción en la pantalla
                        cv2.putText(frame, f"Prediccion: {self.prediccion}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
                        cv2.imshow('Reconocimiento de Gestos', frame)
                        if cv2.waitKey(5) & 0xFF == 27:  # Presionar ESC para salir
                            break
        finally:
            self.cap.release()
            cv2.destroyAllWindows()
            
    def limpiar(self):
        logger.info("Limpiando recursos de ReconocimientoService")
        if self.hands:
            self.hands.close()
        if self.face_detection:
            self.face_detection.close()
        if self.model_ft:
            del self.model_ft
        self.model_ft = None
        self.hands = None
        self.face_detection = None

    def __del__(self):
        self.limpiar()
        logger.info("ReconocimientoService destruido")

    async def iniciar_web(self, websocket: WebSocket, modelo: str):
        try:
            max_manos = self.contar_manos(modelo)
            self.inicializar_modelos(max_manos)
            
            funcion_prediccion = self.predecir_un_modelo
            if modelo == "src/modelos/todas.pt":
                funcion_prediccion = self.predecir
            
            while True:
                try:
                    data = await websocket.receive_text()
                    if not data:
                        logger.warning("Datos recibidos vacíos")
                        await websocket.send_json({"error": "Datos vacíos"})
                        continue
                    img_data = base64.b64decode(data.split(',')[1])
                    nparr = np.frombuffer(img_data, np.uint8)
                    frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
                    
                    if frame is None or frame.size == 0:
                        logger.error("Frame vacío o inválido")
                        await websocket.send_json({"error": "Imagen inválida"})
                        continue
                    
                    funcion_prediccion(frame, max_manos)
                    
                    await websocket.send_json({"prediccion": int(self.prediccion)})
                except Exception as e:
                    logger.error(f"Error en el procesamiento: {e}")
                    await websocket.send_json({"error": str(e)})
        finally:
            self.limpiar()
            
            
            
            
            
            
            
            
            
            
            
            
    def predecir_un_modelo(self, frame, max_manos):
        height, width, _ = frame.shape
        frame = cv2.flip(frame, 1)
        frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        # Face
        results_face = self.face_detection.process(frame_rgb)
        # Hands
        results = self.hands.process(frame_rgb)

        if results.multi_hand_landmarks is not None and results_face.detections is not None:
            for detection in results_face.detections:
                self.pintar_cara(frame, detection, width, height)
                break

            cont = 0
            for hand_landmarks in results.multi_hand_landmarks:
                cont+=1
                self.recuperar_coordenadas(hand_landmarks, width, height)

                self.pintar_mano(frame,hand_landmarks)
                distancia_referencia = self.calcular_distancia()
                self.normalizar( distancia_referencia)
                if (time.time() - self.tiempo_ini >= 0.5 and cont==max_manos):
                    if max_manos==1:
                        aux = np.concatenate((self.x_coordinates, self.y_coordinates),axis=None).reshape(1,-1)  
                    else:
                        if(results.multi_handedness[0].classification[0].label=="Right"):
                            aux_x = np.concatenate((aux_x, self.x_coordinates),axis=None) 
                            aux_y = np.concatenate((aux_y, self.y_coordinates),axis=None)
                        else:
                            aux_x = np.concatenate((self.x_coordinates, aux_x),axis=None) 
                            aux_y = np.concatenate((self.y_coordinates, aux_y),axis=None)
                            
                        aux = np.concatenate((aux_x, aux_y),axis=None).reshape(1,-1) 
                    
                    i = torch.Tensor(aux.reshape(1, -1))
                    i = Variable(i)
                    predict = rna.softmax(self.model_ft(i), dim=1)
                    self.prediccion = predict.argmax().item()
                    self.tiempo_ini = time.time()
                
                aux_x,aux_y = self.x_coordinates, self.y_coordinates 
        else:
            self.prediccion = 100