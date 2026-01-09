from fastapi import FastAPI
from controllers import user_controllers, websocket_controller, recognition_controller
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

allowed_origins = [
    "http://localhost:5173",  # Asumiendo que este es el puerto de su aplicación React
    "http://localhost:3000",  # Otro puerto común para desarrollos en React
    "https://localhost:5173", # Versión HTTPS
    "https://localhost:3000", # Versión HTTPS
    "https://192.168.1.4:5173",  # Reemplace con su IP específica
    "https://192.168.1.4:5173", # Versión HTTPS de su IP
    "https://192.168.1.3:5173", 
    "https://192.168.1.3:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluye los routers
app.include_router(user_controllers.router)
app.include_router(websocket_controller.router)
app.include_router(recognition_controller.router)


@app.get("/")
async def root():
    return {"message": "Bienvenido a la API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000,asl_keyfile="./localhost+2-key.pem",  # Ruta al archivo de clave privada generado por mkcert
        ssl_certfile="./localhost+2.pem")