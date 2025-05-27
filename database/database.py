from sqlalchemy import create_engine
from database.config import settings

engine = create_engine(
    url=settings.DATABASE_URL_psycopg,
    echo=True,
)
