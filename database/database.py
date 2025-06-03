from sqlalchemy import URL, create_engine
from database.config import settings

'''
файл для запуска дб
'''

engine = create_engine(
    url=settings.DATABASE_URL_psycopg,
    echo=True,
)
