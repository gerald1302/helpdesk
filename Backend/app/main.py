from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from sqlalchemy import text
from app.db.session import engine, get_db
from app.models.models import Base

# Crée les tables physiquement si elles n'existent pas encore
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Helpdesk API")

@app.get("/")
def test_connection(db: Session = Depends(get_db)):
    try:
        # Exécute une mini requête pour tester
        db.execute(text("SELECT 1"))
        return {"status": "success", "message": "Connexion PostgreSQL établie !"}
    except Exception as e:
        return {"status": "error", "message": str(e)}
