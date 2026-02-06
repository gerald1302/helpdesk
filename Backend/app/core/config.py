import os
from pydantic_settings import BaseSettings
from dotenv import load_dotenv

# Charge le fichier .env situé à la racine du projet
load_dotenv()

class Settings(BaseSettings):
    # Infos générales
    PROJECT_NAME: str = "Helpdesk API"
    PROJECT_VERSION: str = "1.0.0"
    
    # Base de données
    # On récupère la variable DATABASE_URL du .env
    DATABASE_URL: str = os.getenv("DATABASE_URL")
    
    # Sécurité (pour plus tard)
    SECRET_KEY: str = os.getenv("SECRET_KEY", "une_cle_tres_secrete_par_defaut")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 # 24 heures

# On crée une instance des réglages pour l'importer ailleurs
settings = Settings()