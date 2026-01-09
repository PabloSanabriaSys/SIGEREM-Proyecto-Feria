from io import BytesIO
from PIL import Image
import asyncio
import os
from datetime import datetime
import logging
import base64

# Configuración de logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class ImageService:
    
    def __init__(self) -> None:  
        self.UPLOAD_DIR = "uploaded_images"
        os.makedirs(self.UPLOAD_DIR, exist_ok=True)
        
    # Aqui se procesara la imagen
    def process_image(image_bytes: bytes) -> bytes:
        with Image.open(BytesIO(image_bytes)) as img:
            img = img.convert("L")
            output = BytesIO()
            img.save(output, format='PNG')
            return output.getvalue()
    
    
    async def save_image(self, image_bytes: bytes) -> str:
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"image_{timestamp}.png"
        filepath = os.path.join(self.UPLOAD_DIR, filename)
        
        try:
            with open(filepath, "wb") as f:
                f.write(image_bytes)
            logger.info(f"Imagen guardada: {filepath}")
            return filename
        
        except Exception as e:
            logger.error(f"Error al guardar la imagen: {str(e)}")
            raise
        
        
    async def save_image_base64(self, image_base64: str) -> str:
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"image_{timestamp}.png"
        filepath = os.path.join(self.UPLOAD_DIR, filename)
        image_data = base64.b64decode(image_base64)
        
        try:
            with open(filepath, "wb") as f:
                f.write(image_data)
            logger.info(f"Imagen guardada: {filepath}")
            return filename
        
        except Exception as e:
            logger.error(f"Error al guardar la imagen: {str(e)}")
            raise