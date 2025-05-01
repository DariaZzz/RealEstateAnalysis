import json

# flats_data - словарь данных о квартирах
def make_json(flats_data):

    # путь к файлу
    json_file = "flats_data.json"

    # сохранение словаря данных в файл json
    with open(json_file, 'w', encoding='utf-8') as f:
        json.dump(flats_data, f, ensure_ascii=False, indent=4)
