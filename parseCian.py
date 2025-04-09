from bs4 import BeautifulSoup
import re
import json
import requests

# парсинг отдельной квартиры
def parse_flat_info(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    print(f"URL: {url}")

    script_tag = [s for s in soup.find_all("script") if s.get("type") == "application/ld+json"][0]
    if not script_tag:
        print("Теги <script> не найдены.")
    else:
        price_match = re.search(r'"price":\s*(\d+)', str(script_tag))
        if price_match:
            price = int(price_match.group(1))
            print(f"Значение price: {price}")

    script_tag = soup.find("script", string=re.compile(r'"undergrounds":\s*\[.*?\]'))
    undergrounds_match = re.findall(r'"undergrounds":\s*\[.*?\]', str(script_tag), re.DOTALL)[0]
    pattern = r'"name":"([^"]+)".*?"travelType":"([^"]+)".*?"travelTime":(\d+)'
    matches = re.findall(pattern, undergrounds_match)

    if matches:
        print("Извлеченные данные:")
        for name, travel_type, travel_time in matches:
            print(f"- Название: {name}, Тип передвижения: {travel_type}, Время в пути: {travel_time} минут")
    else:
        print("Данные не найдены.")

    # поиск информации о площади, этаже
    script_tag = soup.find("script", string=re.compile(r'"factoids":'))
    if script_tag:
        script_text = script_tag.string

        # Поиск массива factoids в тексте
        match = re.search(r'"factoids":(\[.*?\])', script_text)
        if match:
            factoids_json = match.group(1)

            try:
                factoids = json.loads(factoids_json)
            except json.JSONDecodeError as e:
                print("Ошибка при декодировании JSON:", e)
                factoids = []

            # Извлечение значений площади
            for factoid in factoids:
                # total_area = None
                # living_area = None
                # floor = None
                # kitchen_area = None
                # built_year = None
                # completion_year = None
                if factoid["title"] == "Общая площадь":
                    total_area = factoid["value"]
                    print(f"Общая площадь: {total_area}")
                elif factoid["title"] == "Жилая площадь":
                    living_area = factoid["value"]
                    print(f"Жилая площадь: {living_area}")
                elif factoid["title"] == "Этаж":
                    floor = factoid["value"]
                    print(f"Этаж: {floor}")
                elif factoid["title"] == "Площадь кухни":
                    kitchen_area = factoid["value"]
                    print(f"Этаж: {kitchen_area}")
                elif factoid["title"] == "Год постройки":
                    built_year = factoid["value"]
                    print(f"Год постройки: {built_year}")
                elif factoid["title"] == "Год сдачи":
                    completion_year = factoid["value"]
                    print(f"Год сдачи: {completion_year}")
        else:
            print("Не удалось найти блок с 'factoids'.")
    else:
        print("Не удалось найти тег <script> с данными.")
    print("*" * 100)

# парсинг главной страницы
def parse_main_page(url, number_of_parsing=20):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    all_links = [a for a in soup.find_all("a") if a.find("div") is not None and a.find("div").get("data-name") == "Gallery"]
    for a in all_links:
        parse_flat_info(a['href'])

url = "https://www.cian.ru/cat.php?currency=2&deal_type=sale&engine_version=2&maxprice=20000000&offer_type=flat&region=1&room1=1&room2=1"
print(parse_main_page(url))