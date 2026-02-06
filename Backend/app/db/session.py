from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from app.core.config import settings

# Création du moteur
engine = create_engine(settings.DATABASE_URL)

# --- TEST DE CONNEXION CONSOLE ---
try:
    with engine.connect() as connection:
        connection.execute(text("SELECT 1"))
        print("\n" + "="*30)
        print("✅ DATABASE: Connected Successfully!")
        print("📡 Host: localhost:5432")
        print("="*30 + "\n")
except Exception as e:
    print("\n" + "!"*30)
    print("❌ DATABASE: Connection Failed!")
    print(f"⚠️  Error: {e}")
    print("!"*30 + "\n")
# ---------------------------------

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()