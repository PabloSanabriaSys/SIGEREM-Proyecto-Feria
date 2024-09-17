from fastapi import FastAPI
from src.controllers import user_controllers, websocket_controller

app = FastAPI()

# Incluye los routers
app.include_router(user_controllers.router)
app.include_router(websocket_controller.router)

@app.get("/")
async def root():
    return {"message": "Bienvenido a la API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)