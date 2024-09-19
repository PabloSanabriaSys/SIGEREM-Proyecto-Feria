from fastapi import APIRouter, Depends, HTTPException
from schemas.user import UserCreate, User
from services.user_service import UserService

router = APIRouter(prefix="/users", tags=["users"])

@router.post("/", response_model=User)
def create_user(user: UserCreate):
    return UserService.create_user(user)

@router.get("/{user_id}", response_model=User)
def read_user(user_id: int):
    user = UserService.get_user(user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    return user