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
        manager.disconnect(websocket)
        await manager.broadcast(f"Cliente #{client_id} dejó el chat")
        
    
    
@router.websocket("/ws/save_image")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            print(data)

            filename = await image.save_image_base64(data)
            print(f"Imagen guardada como: {filename}")
            await manager.broadcast("Imagen Recibida")
    except:
        await manager.broadcast("Conexion fallida")
    finally:
        manager.disconnect(websocket)