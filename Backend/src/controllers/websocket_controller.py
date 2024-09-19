from fastapi import APIRouter, WebSocket
from libs.coneccion_manager import ConnectionManager
from services.image_service import ImageService
router = APIRouter()
manager = ConnectionManager()
image = ImageService()


@router.websocket("/ws/{client_id}")
async def websocket_endpoint(websocket: WebSocket, client_id: int):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            print(data)
            await manager.broadcast(f"Cliente #{client_id} dice: {data}")
    except:
        await manager.broadcast(f"Cliente #{client_id} dejó el chat")
    finally:
        manager.disconnect(websocket)
        
        
        
        

    
    
@router.websocket("/ws/save_image")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive()
            print(data)
            #image.process_image(data)
            await manager.broadcast(f"Imagen Recibida")
    except:
        await manager.broadcast(f"Conexion fallida")
    finally:
        manager.disconnect(websocket)