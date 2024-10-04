from fastapi import APIRouter, WebSocket
from libs.coneccion_manager import ConnectionManager
from services.recognition_service import Reconocimiento
router = APIRouter()
manager = ConnectionManager()

@router.websocket("/recognition/{model}")
async def websocket_endpoint(websocket: WebSocket,model: str):
    await websocket.accept()
    reconocimiento_service = Reconocimiento()
    await reconocimiento_service.iniciar_web(websocket, f"src/modelos/{model}.pt")