import datetime
from sqlalchemy import text, insert, select, func
from database.database import engine
from database.models import metadata_obj, underground_lines_table, underground_stations_table, costs_table, \
    housing_types_table, move_types_table, urls_table, flats_table

'''
файл с основными функциями для работы с таблицами
'''

def create_tables():
    engine.echo = False
    metadata_obj.drop_all(engine)
    metadata_obj.create_all(engine)
    engine.echo = True


def insert_lines():
    """
    функция вставки всех линий метро в таблицу с линиями метро
    :return: Добавление веток метро в underground_lines_table
    """
    with engine.connect() as conn:
        stmt = insert(underground_lines_table).values(
            [
                {"id": 1, "name": "Сокольническая", "color": "#E41F1F"},
                {"id": 2, "name": "Замоскворецкая", "color": "#4DBE52"},
                {"id": 3, "name": "Арбатско-Покровская", "color": "#0078BF"},
                {"id": 4, "name": "Филёвская", "color": "#1CB9E7"},
                {"id": 5, "name": "Кольцевая", "color": "#894E35"},
                {"id": 6, "name": "Калужско-Рижская", "color": "#F58220"},
                {"id": 7, "name": "Таганско-Краснопресненская", "color": "#8E479C"},
                {"id": 8, "name": "Калининская", "color": "#FED500"},
                {"id": 9, "name": "Серпуховско-Тимирязевская", "color": "#A1A2A3"},
                {"id": 10, "name": "Люблинско-Дмитровская", "color": "#B3D445"},
                {"id": 11, "name": "Большая кольцевая", "color": "#0cc4d4"},
                {"id": 12, "name": "Бутовская", "color": "#B9DEF0"},
                {"id": 13, "name": "Некрасовская", "color": "#C7243F"},
                {"id": 14, "name": "Троицкая", "color": "#67C8C5"},
                {"id": 15, "name": "Московское центральное кольцо", "color": "#E67624"},
                {"id": 16, "name": "Московская монорельсовая система", "color": "#8B008B"},
                {"id": 17, "name": "Солнцевская", "color": "#FED500"}
            ]
        )
        conn.execute(stmt)
        conn.commit()


def insert_stations():
    """
    функция вставки всех станций метро в таблицу со странциями метро
    :return: Добавление станций метро в underground_stations_table
    """
    with engine.connect() as conn:
        stmt = insert(underground_stations_table).values(
            [
                *[{"name": name, "line_id": 1} for name in [
                    "Бульвар Рокоссовского", "Черкизовская", "Преображенская площадь",
                    "Сокольники", "Красносельская", "Комсомольская", "Красные Ворота",
                    "Чистые пруды", "Лубянка", "Охотный Ряд", "Библиотека имени Ленина",
                    "Кропоткинская", "Парк культуры", "Фрунзенская", "Спортивная",
                    "Воробьёвы горы", "Университет", "Проспект Вернадского", "Юго-Западная",
                    "Тропарёво", "Румянцево", "Саларьево", "Филатов Луг", "Прокшино",
                    "Ольховая", "Коммунарка", "Потапово"
                ]],

                *[{"name": name, "line_id": 2} for name in [
                    "Ховрино", "Беломорская", "Речной вокзал", "Водный стадион", "Войковская",
                    "Сокол", "Аэропорт", "Динамо", "Белорусская", "Маяковская", "Тверская",
                    "Театральная", "Новокузнецкая", "Павелецкая", "Автозаводская", "Технопарк",
                    "Коломенская", "Каширская", "Кантемировская", "Царицыно", "Орехово",
                    "Домодедовская", "Красногвардейская", "Алма-Атинская"
                ]],

                *[{"name": name, "line_id": 3} for name in [
                    "Щёлковская", "Первомайская", "Измайловская", "Партизанская", "Семёновская",
                    "Электрозаводская", "Бауманская", "Курская", "Площадь Революции", "Арбатская",
                    "Смоленская", "Киевская", "Парк Победы", "Славянский бульвар", "Кунцевская",
                    "Молодёжная", "Крылатское", "Строгино", "Мякинино", "Волоколамская", "Митино",
                    "Пятницкое шоссе"
                ]],

                *[{"name": name, "line_id": 4} for name in [
                    "Кунцевская", "Пионерская", "Фили", "Багратионовская", "Филёвский парк",
                    "Студенческая", "Киевская", "Смоленская",
                    "Арбатская", "Александровский сад", "Кутузовская", "Москва-Сити", "Деловой центр"
                ]],

                *[{"name": name, "line_id": 5} for name in [
                    "Парк культуры", "Октябрьская", "Добрынинская", "Павелецкая", "Таганская",
                    "Курская", "Комсомольская", "Проспект Мира", "Новослободская", "Белорусская",
                    "Краснопресненская", "Киевская"
                ]],

                *[{"name": name, "line_id": 6} for name in [
                    "Новоясеневская", "Ясенево", "Тёплый Стан", "Коньково", "Беляево",
                    "Калужская", "Новые Черёмушки", "Профсоюзная", "Академическая", "Ленинский проспект",
                    "Шаболовская", "Октябрьская", "Третьяковская", "Китай-город", "Тургеневская",
                    "Сухаревская", "Проспект Мира", "Рижская", "Алексеевская", "ВДНХ", "Ботанический сад",
                    "Свиблово", "Бабушкинская", "Медведково"
                ]],

                *[{"name": name, "line_id": 7} for name in [
                    "Котельники", "Жулебино", "Лермонтовский проспект", "Выхино", "Рязанский проспект",
                    "Кузьминки", "Текстильщики", "Волгоградский проспект", "Пролетарская", "Таганская",
                    "Китай-город", "Кузнецкий мост", "Пушкинская", "Баррикадная", "Улица 1905 года",
                    "Беговая", "Полежаевская", "Октябрьское поле", "Щукинская", "Спартак", "Тушинская",
                    "Сходненская", "Планерная"
                ]],

                *[{"name": name, "line_id": 8} for name in [
                    "Новокосино", "Новогиреево", "Перово", "Шоссе Энтузиастов", "Авиамоторная",
                    "Площадь Ильича", "Марксистская", "Третьяковская"
                ]],

                *[{"name": name, "line_id": 9} for name in [
                    "Алтуфьево", "Бибирево", "Отрадное", "Владыкино", "Петровско-Разумовская",
                    "Тимирязевская", "Дмитровская", "Савёловская", "Менделеевская", "Цветной бульвар",
                    "Чеховская", "Боровицкая", "Полянка", "Серпуховская", "Тульская", "Нагатинская",
                    "Нагорная", "Нахимовский проспект", "Севастопольская", "Чертановская", "Южная",
                    "Пражская", "Улица Академика Янгеля", "Аннино", "Бульвар Дмитрия Донского"
                ]],

                *[{"name": name, "line_id": 10} for name in [
                    "Физтех", "Лианозово", "Яхромская", "Селигерская", "Верхние Лихоборы", "Окружная",
                    "Петровско-Разумовская", "Фонвизинская", "Бутырская", "Марьина Роща", "Достоевская",
                    "Трубная", "Сретенский бульвар", "Чкаловская", "Римская", "Крестьянская застава", "Дубровка",
                    "Кожуховская", "Печатники", "Волжская", "Люблино", "Братиславская", "Марьино", "Борисово",
                    "Шипиловская", "Зябликово"
                ]],

                *[{"name": name, "line_id": 11} for name in [
                    "Нижегородская", "Лефортово", "Авиамоторная",
                    "Электрозаводская", "Сокольники", "Рижская", "Марьина Роща", "Савёловская", "Текстильщики",
                    "Печатники", "Нагатинский затон",
                    "Петровский парк", "ЦСКА", "Хорошёвская",
                    "Народное Ополчение", "Мнёвники", "Терехово", "Кунцевская", "Давыдково",
                    "Аминьевская", "Мичуринский проспект", "Проспект Вернадского", "Новаторская",
                    "Воронцовская", "Зюзино", "Каховская", "Варшавская", "Каширская", "Кленовый бульвар"
                ]],

                *[{"name": name, "line_id": 12} for name in [
                    "Битцевский парк", "Лесопарковая", "Улица Старокачаловская", "Улица Скобелевская",
                    "Бульвар Адмирала Ушакова", "Улица Горчакова", "Бунинская аллея"
                ]],

                *[{"name": name, "line_id": 13} for name in [
                    "Нижегородская", "Стахановская", "Окская", "Юго-Восточная", "Косино",
                    "Улица Дмитриевского", "Лухмановская", "Некрасовка"
                ]],

                *[{"name": name, "line_id": 14} for name in [
                    "Коммунарка", "Новомосковская", "Корниловская", "Тютчевская",
                    "Генерала Тюленева", "Университет дружбы народов",
                    "Новаторская"
                ]],

                *[{"name": name, "line_id": 15} for name in [
                    "Окружная", "Владыкино", "Ботанический сад", "Ростокино", "Белокаменная",
                    "Бульвар Рокоссовского", "Локомотив", "Измайлово", "Соколиная Гора", "Шоссе Энтузиастов",
                    "Андроновка", "Нижегородская", "Новохохловская", "Угрешская", "Дубровка",
                    "Автозаводская", "ЗИЛ", "Верхние Котлы", "Крымская", "Площадь Гагарина", "Лужники",
                    "Кутузовская", "Москва-Сити", "Шелепиха", "Хорошёво", "Зорге", "Панфиловская",
                    "Стрешнево", "Балтийская", "Коптево", "Лихоборы"
                ]],

                *[{"name": name, "line_id": 16} for name in [
                    "Тимирязевская", "Улица Милашенкова", "Телецентр", "Улица Академика Королёва",
                    "Выставочный центр", "Улица Сергея Эйзенштейна"
                ]],

                *[{"name": name, "line_id": 17} for name in [
                    "Рассказовка", "Новопеределкино", "Боровское шоссе", "Солнцево", "Говорово", "Озёрная",
                    "Мичуринский проспект", "Раменки", "Ломоносовский проспект", "Минская",
                    "Парк Победы", "Деловой центр", "Пыхтино",
                    "Аэропорт Внуково"
                ]]
            ]
        )
        conn.execute(stmt)
        conn.commit()


def get_or_create(conn, table, defaults=None, **kwargs):
    """
    вспомогательная функция для получения или создания записи
    :param conn: соединение с базой данных
    :param table: из какой таблицы брать данные
    :param defaults: словарь значений по умолчанию для создания новой записи
    :param **kwargs: параметры для поиска существующей записи
    :return: id существуеющей или добавленной записи
    """
    result = conn.execute(select(table).filter_by(**kwargs)).first() # поиск записи по переданным параметрам
    if result:
        # если запись найдена, возвращаем ее id
        return result[0] 
    else:
        insert_data = kwargs.copy() # данные для вставки
        if defaults:
            # добавляем значения по умолчанию, если они указаны
            insert_data.update(defaults)
        result = conn.execute(insert(table).values(**insert_data)) # вставка новой записи
        return result.inserted_primary_key[0] # возврат id


def process_flat_data(conn, url, flat_info):
    """
    функция обработки данных одной квартиры и сохранение ее в базу данных
    :param conn: соединение с базой данных
    :param url: ссылка на квартиру
    :param flat_info: словарь с информацией о квартире
    :return: строка с результатом операции
    """
    # достает станцию метро
    underground_id = get_or_create(
        conn, underground_stations_table,
        name=flat_info['underground']['name']
    )

    housing_type_id = get_or_create(
        conn, housing_types_table,
        name=flat_info['housing_type']
    )
    
    # достает тип перемещения
    move_type_id = get_or_create(
        conn, move_types_table,
        name=flat_info['underground']['travel_type']
    )
    
    # достает ссылку
    url_id = get_or_create(conn, urls_table, url=url)
    
    # проверка существования квартиры
    flat_exists = conn.execute(
        select(flats_table.c.id).where(flats_table.c.url_id == url_id)
    ).scalar() # возвращает id или None
    
    if flat_exists:
        # если квартира существует, добавляем только новую цену
        conn.execute(
            insert(costs_table).values(
                current_cost=flat_info['price'],
                date_of_parsing=datetime.datetime.now().strftime('%Y-%m-%d'),
                flat_id=flat_exists
            )
        )
        return f"Price updated ID {flat_exists}"
    else:
        # иначе добавляем данные о новой квартире целиков
        flat_data = {
            'underground_id': underground_id,
            'url_id': url_id,
            'address': flat_info['address'],
            'number_of_rooms': flat_info['number_of_rooms'],
            'total_area': flat_info['total_area'],
            'living_area': flat_info.get('living_area'),
            'kitchen_area': flat_info.get('kitchen_area'),
            'floor': flat_info.get('floor'),
            'housing_type_id': housing_type_id,
            'year': flat_info['year'],
            'move_type_id': move_type_id,
            'move_time': flat_info['underground']['travel_time']
        }

        flat_id = conn.execute(insert(flats_table).values(**flat_data)).inserted_primary_key[0]

        conn.execute(
            # добавление начальной цены
            insert(costs_table).values(
                current_cost=flat_info['price'],
                date_of_parsing=datetime.datetime.now().strftime('%Y-%m-%d'),
                flat_id=flat_id
            )
        )
        return f"Flat added ID {flat_id}"


def process_flats_dict(flats_dict):
    """
    функция прохода по словарю квартир для обработки данных каждой квартиры и сохранения ее в базу данных
    :param flat_dict: словарь с квартирами
    :return: массив строк-результатов операций
    """
    results = []
    with engine.begin() as conn:
        for url, flat_info in flats_dict.items():
            try:
                result = process_flat_data(conn, url, flat_info)
                results.append(result)
            except Exception as e:
                results.append(f"Error proccesing {url}: {str(e)}")
    return results


def select_by_underground(underground_name):
    """
    функция выборки квартир по метро
    :param underground_name: название метро для выборки
    :return: массив квартир из выборки
    """
    with engine.connect() as conn:
        query = select([
            flats_table.c.id,
            flats_table.c.address,
            flats_table.c.number_of_rooms,
            flats_table.c.total_area,
            flats_table.c.floor,
            func.max(costs_table.c.current_cost).label('current_price'),
            underground_stations_table.c.name.label('underground'),
            housing_types_table.c.name.label('housing_type')
        ]).select_from(
            flats_table.join(
                underground_stations_table,
                flats_table.c.underground_id == underground_stations_table.c.id
            ).join(
                housing_types_table,
                flats_table.c.housing_type_id == housing_types_table.c.id
            ).join(
                costs_table,
                flats_table.c.id == costs_table.c.flat_id
            )
        ).where(
            underground_stations_table.c.name == underground_name
        ).group_by(
            flats_table.c.id,
            underground_stations_table.c.name,
            housing_types_table.c.name
        )

        result = conn.execute(query)

        return [dict(row) for row in result]


def get_flats_by_rooms(number_of_rooms):
    """
    функция выборки квартир по числу комнат
    :param number_of_rooms: число комнат для выборки
    :return: массив квартир из выборки
    """
    with engine.connect() as conn:
        query = select([
            flats_table.c.id,
            flats_table.c.address,
            flats_table.c.number_of_rooms,
            flats_table.c.total_area,
            flats_table.c.floor,
            func.max(costs_table.c.current_cost).label('current_price'),
            underground_stations_table.c.name.label('underground'),
            housing_types_table.c.name.label('housing_type')
        ]).select_from(
            flats_table.join(
                underground_stations_table,
                flats_table.c.underground_id == underground_stations_table.c.id
            ).join(
                housing_types_table,
                flats_table.c.housing_type_id == housing_types_table.c.id
            ).join(
                costs_table,
                flats_table.c.id == costs_table.c.flat_id
            )
        ).group_by(
            flats_table.c.id,
            underground_stations_table.c.name,
            housing_types_table.c.name
        )

        if isinstance(number_of_rooms, list):
            query = query.where(flats_table.c.number_of_rooms.in_(number_of_rooms))
        else:
            query = query.where(flats_table.c.number_of_rooms == number_of_rooms)

        result = conn.execute(query)

        return [dict(row) for row in result]
