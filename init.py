from database.core import create_tables, insert_lines, insert_stations

# файл для инициализации бд на своем хосте
if __name__ == "__main__":
    create_tables()
    insert_lines()
    insert_stations()
