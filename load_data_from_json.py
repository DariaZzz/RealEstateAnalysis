import json
import psycopg2
from urllib.parse import urlparse

with open('data/flats_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

conn = psycopg2.connect(
    host="localhost",
    port=5432,
    dbname="flats",
    user="user",
    password="1234"
)
cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS flats (
    id SERIAL PRIMARY KEY,
    url TEXT UNIQUE,
    district TEXT,
    price NUMERIC,
    rooms INTEGER,
    underground_name TEXT,
    travel_type TEXT,
    travel_time INTEGER,
    total_area NUMERIC,
    living_area NUMERIC,
    kitchen_area NUMERIC,
    floor TEXT,
    year INTEGER,
    housing_type TEXT
)
""")

district = data.get("address", "Не указан")

for url, flat in data.items():
    if url == "address":
        continue
    
    underground = flat.get("underground", {})
    cursor.execute("""
    INSERT INTO flats (
        url, district, price, rooms,
        underground_name, travel_type, travel_time,
        total_area, living_area, kitchen_area,
        floor, year, housing_type
    ) VALUES (
        %s, %s, %s, %s,
        %s, %s, %s,
        %s, %s, %s,
        %s, %s, %s
    )
    """, (
        url, district,
        flat.get("price"),
        flat.get("number_of_rooms"),
        underground.get("name"),
        underground.get("travel_type"),
        underground.get("travel_time"),
        flat.get("total_area"),
        flat.get("living_area"),
        flat.get("kitchen_area"),
        flat.get("floor"),
        flat.get("year"),
        flat.get("housing_type")
    ))

conn.commit()
cursor.close()
conn.close()

print("Данные успешно загружены в PostgreSQL!")