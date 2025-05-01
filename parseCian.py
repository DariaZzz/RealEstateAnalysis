from bs4 import BeautifulSoup
import re
import json
import requests

class Parser(object):
    """
    класс для парсинга информации о квартирах
    """

    def __init__(self):
        self.page = '' #текущая страница (в начале строка пустая, тк на начальной странице нет &p=1
        self.page_num = 2 #номер текущей страницы, начиная со 2
        self.url = f"https://www.cian.ru/cat.php?currency=2&deal_type=sale&engine_version=2&maxprice=20000000&offer_type=flat&{self.page}region=1&room1=1&room2=1"
        # url с учетом текущей страницы
        self.flat_dict = {}
        """
        flat_dict:
            url - url квартиры
            price - стоимость квартиры (в рублях)
            underground - метро:
                name - название
                travel_type - тип передвижения до метро (walk, transport)
                travel_time - время передвижения до метро (в минутах)
            total_area - общая площадь (в м кв.)
            living_area - жилая площадь (в м кв.)
            floor - этаж
            kitchen_area - площадь кухни (в м кв.)
            year - год постройки или сдачи
            housing_type - тип жилья(Новостройка, Вторичка, Апартаменты) или комбинации (Новостройка / Апартаменты)
        """

    # парсинг отдельной квартиры
    def parse_flat_info_with_logging(self, url):
        """
            парсинг отдельной квартиры с логированием
            :param url: url квартиры
            :return: Добавление квартиры в flat_dict
        """
        response = requests.get(url)
        soup = BeautifulSoup(response.text, 'html.parser')
        print(f"URL: {url}")
        page_dict = {}

        script_tag = [s for s in soup.find_all("script") if s.get("type") == "application/ld+json"][0]
        if not script_tag:
            print("Теги <script> не найдены.")
        else:
            price_match = re.search(r'"price":\s*(\d+)', str(script_tag))
            if price_match:
                price = int(price_match.group(1))
                print(f"Значение price: {price}")
                page_dict['price'] = price # собираем dict страницы

        script_tag = soup.find("script", string=re.compile(r'"undergrounds":\s*\[.*?\]'))
        undergrounds_match = re.findall(r'"undergrounds":\s*\[.*?\]', str(script_tag), re.DOTALL)[0]
        pattern = r'"name":"([^"]+)".*?"travelType":"([^"]+)".*?"travelTime":(\d+)'
        matches = re.findall(pattern, undergrounds_match)

        if matches:
            print("Извлеченные данные:")
            for name, travel_type, travel_time in matches:
                print(f"- Название: {name}, Тип передвижения: {travel_type}, Время в пути: {travel_time} минут")
            name, travel_type, travel_time = matches[0]
            page_dict['underground'] = {'name': name, 'travel_type': travel_type, 'travel_time': int(travel_time)} # собираем dict страницы
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
                    if factoid["title"] == "Общая площадь":
                        total_area = factoid["value"]
                        print(f"Общая площадь: {total_area[:-3]}")
                        page_dict['total_area'] = float(total_area[:-3].replace(',', '.')) # собираем dict страницы
                    elif factoid["title"] == "Жилая площадь":
                        living_area = factoid["value"]
                        print(f"Жилая площадь: {living_area}")
                        page_dict['living_area'] = float(living_area[:-3].replace(',', '.')) # собираем dict страницы
                    elif factoid["title"] == "Этаж":
                        floor = factoid["value"]
                        print(f"Этаж: {floor}")
                        page_dict['floor'] = floor # собираем dict страницы
                    elif factoid["title"] == "Площадь кухни":
                        kitchen_area = factoid["value"]
                        print(f"Площадь кухни: {kitchen_area}")
                        page_dict['kitchen_area'] = float(kitchen_area[:-3].replace(',', '.')) # собираем dict страницы
                    elif factoid["title"] == "Год постройки":
                        built_year = factoid["value"]
                        print(f"Год постройки: {built_year}")
                        page_dict['year'] = int(built_year) # собираем dict страницы
                    elif factoid["title"] == "Год сдачи":
                        completion_year = factoid["value"]
                        print(f"Год сдачи: {completion_year}")
                        page_dict['year'] = int(completion_year) # собираем dict страницы
            else:
                print("Не удалось найти блок с 'factoids'.")
        else:
            print("Не удалось найти тег <script> с данными.")

        # поиск типа жилья
        items = soup.find_all('div', {'data-name': 'OfferSummaryInfoItem'})
        for item in items:
            key = item.find('p')
            if key and 'Тип жилья' in key.get_text(strip=True):
                value = key.find_next('p')
                if value:
                    housing_type = value.get_text(strip=True)
                    print("Тип жилья:", housing_type)
                    page_dict['housing_type'] = housing_type
                    # match housing_type:
                    #     case "Новостройка":
                    #         page_dict['housing_type'] = 0
                    #     case "Вторичка":
                    #         page_dict['housing_type'] = 1
                    #     case "Апартаменты":
                    #         page_dict['housing_type'] = 2
                    break
        print('*' * 100)
        self.flat_dict[url] = page_dict

    # парсинг отдельной квартиры
    def parse_flat_info(self, url):
        """
        парсинг отдельной квартиры без логирования
        :param url: url квартиры
        :return: Добавление квартиры в flat_dict
        """
        response = requests.get(url)
        soup = BeautifulSoup(response.text, 'html.parser')
        print(f"URL: {url}")
        page_dict = {}

        script_tag = [s for s in soup.find_all("script") if s.get("type") == "application/ld+json"][0]
        if not script_tag:
            print("Теги <script> не найдены.")
        else:
            price_match = re.search(r'"price":\s*(\d+)', str(script_tag))
            if price_match:
                price = int(price_match.group(1)) # цена
                page_dict['price'] = price  # собираем dict страницы

        # поиск метро
        script_tag = soup.find("script", string=re.compile(r'"undergrounds":\s*\[.*?\]'))
        undergrounds_match = re.findall(r'"undergrounds":\s*\[.*?\]', str(script_tag), re.DOTALL)[0]
        pattern = r'"name":"([^"]+)".*?"travelType":"([^"]+)".*?"travelTime":(\d+)'
        matches = re.findall(pattern, undergrounds_match)

        if matches:
            name, travel_type, travel_time = matches[0]
            page_dict['underground'] = {'name': name, 'travel_type': travel_type,
                                        'travel_time': int(travel_time)}  # собираем dict страницы

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
                    if factoid["title"] == "Общая площадь":
                        total_area = factoid["value"]
                        page_dict['total_area'] = float(total_area[:-3].replace(',', '.'))  # собираем dict страницы
                    elif factoid["title"] == "Жилая площадь":
                        living_area = factoid["value"]
                        page_dict['living_area'] = float(
                            living_area[:-3].replace(',', '.'))  # собираем dict страницы
                    elif factoid["title"] == "Этаж":
                        floor = factoid["value"]
                        page_dict['floor'] = floor  # собираем dict страницы
                    elif factoid["title"] == "Площадь кухни":
                        kitchen_area = factoid["value"]
                        page_dict['kitchen_area'] = float(
                            kitchen_area[:-3].replace(',', '.'))  # собираем dict страницы
                    elif factoid["title"] == "Год постройки":
                        built_year = factoid["value"]
                        page_dict['year'] = int(built_year)  # собираем dict страницы
                    elif factoid["title"] == "Год сдачи":
                        completion_year = factoid["value"]
                        page_dict['year'] = int(completion_year)  # собираем dict страницы

        # поиск типа жилья
        items = soup.find_all('div', {'data-name': 'OfferSummaryInfoItem'})
        for item in items:
            key = item.find('p')
            if key and 'Тип жилья' in key.get_text(strip=True):
                value = key.find_next('p')
                if value:
                    housing_type = value.get_text(strip=True)
                    page_dict['housing_type'] = housing_type
                    # match housing_type:
                    #     case "Новостройка":
                    #         page_dict['housing_type'] = 0
                    #     case "Вторичка":
                    #         page_dict['housing_type'] = 1
                    #     case "Апартаменты":
                    #         page_dict['housing_type'] = 2
                    break
        self.flat_dict[url] = page_dict

    # парсинг страницы
    def parse_page(self, logging=False):
        """
        парсинг страницы
        :param logging: проброс логирования
        :return: Распаршенная страница в flat_dict
        """
        response = requests.get(self.url)
        soup = BeautifulSoup(response.text, 'html.parser')
        all_links = [a for a in soup.find_all("a") if a.find("div") is not None and a.find("div").get("data-name") == "Gallery"]
        for a in all_links:
            if not logging:
                self.parse_flat_info(a['href'])
            else:
                self.parse_flat_info_with_logging(a['href'])


    #парсинг указанного числа страниц
    def parse_pages(self, number_of_parsing=20, logging=False):
        """
        метод парсинга указанного числа страниц
        :param number_of_parsing: количество страниц
        :param logging: нужно ли логирование при поиске информации квартиры
        :return: Заполненное поле flat_dict
        """

        for i in range(number_of_parsing):
            self.parse_page(logging)
            if self.page == '':
                self.page = '&p=2'
            else:
                self.page = '&p=' + str(self.page_num)
                self.page_num += 1

#parser = Parser()
'''

'''
#parser.parse_pages(1)
#print(parser.flat_dict)
