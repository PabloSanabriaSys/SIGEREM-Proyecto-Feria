from models.user import User
from schemas.user import UserCreate

class UserService:
    @staticmethod
    def create_user(user: UserCreate):
        # Aquí iría la lógica para crear un usuario en la base de datos
        return User(id=1, username=user.username, email=user.email)

    @staticmethod
    def get_user(user_id: int):
        # Aquí iría la lógica para obtener un usuario de la base de datos
        return User(id=user_id, username="example", email="example@email.com")