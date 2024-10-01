from services.recognition_service import Reconocimiento

def probar_modelo_local():
    reconocimiento = Reconocimiento()
    reconocimiento.iniciar_local(modelo="src/modelos/todas.pt")
    
    
if __name__ == "__main__":
    #probar_modelo_local()
    pass