from fastapi import FastAPI
from controllers import user_controllers, websocket_controller, recognition_controller
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
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
    uvicorn.run(app, host="0.0.0.0", port=8000)