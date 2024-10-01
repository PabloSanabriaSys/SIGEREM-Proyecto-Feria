import React, { useEffect, useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";

const CameraRecognition = ({prediccion, setPrediccion}) => {
  const WS_URL = "ws://localhost:8000/recognition";
  const webcamRef = useRef(null);
  const wsRef = useRef(null);
  const [isCapturing, setIsCapturing] = useState(true);

  const setupWebSocket = useCallback(() => {
    wsRef.current = new WebSocket(WS_URL);

    wsRef.current.onopen = () => {
      console.log('Conectado al servidor WebSocket');
    };

    wsRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setPrediccion(data.prediccion);
    };

    wsRef.current.onerror = (error) => {
      console.error('Error en WebSocket:', error);
    };

    wsRef.current.onclose = () => {
      console.log('Desconectado del servidor WebSocket');
    };
  }, []);

  const sendFrame = useCallback(() => {
    if (webcamRef.current && wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        wsRef.current.send(imageSrc);
      }
    }
  }, []);

  useEffect(() => {
    setupWebSocket();

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [setupWebSocket]);

  useEffect(() => {
    let interval;
    if (isCapturing) {
      interval = setInterval(sendFrame, 100);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isCapturing, sendFrame]);

  const handleUserMedia = useCallback(() => {
    setIsCapturing(true);
  }, []);

  return (
    <div className="bg-background">
      <h1>Prueba de Reconocimiento de Gestos</h1>
      {isCapturing && (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          onUserMedia={handleUserMedia}
          videoConstraints={{
            facingMode: "user"
          }}
        />
      )}
      <p>Predicción: <span>{prediccion}</span></p>
    </div>
  );
};

export default CameraRecognition;