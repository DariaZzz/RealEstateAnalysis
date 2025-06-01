# RealEstateAnalysis

## Описание

Проект создан для удобного анализа рынка недвижимости 1-2-хкомнатных квартир до 20 млн. руб. в городе Москва.
Пользователь имеет возможность удобно отобрать квартиры по метро, визуализировать информацию по выбранным критериям.

## Зависимости

```bash 
pip install -r requirements.txt
```
Зависимости, требуемые для работы проекта 
(установка будет производиться во время запуска контейнеров):
* python>=3.12
* annotated-types==0.7.0
* beautifulsoup4==4.13.4
* blinker==1.9.0
* bs4==0.0.2
* certifi==2025.4.26
* charset-normalizer==3.4.1
* click==8.2.1
* colorama==0.4.6
* Flask==3.1.1
* flask-cors==6.0.0
* greenlet==3.2.2
* idna==3.10
* itsdangerous==2.2.0
* Jinja2==3.1.6
* MarkupSafe==3.0.2
* psycopg2-binary==2.9.10
* pydantic==2.11.5
* pydantic-settings==2.9.1
* pydantic_core==2.33.2
* python-dotenv==1.1.0
* requests==2.32.3
* schedule==1.2.2
* soupsieve==2.7
* SQLAlchemy==2.0.41
* typing-inspection==0.4.1
* typing_extensions==4.13.2
* urllib3==2.4.0
* Werkzeug==3.1.3

## Запуск

1. Установите [Docker](https://docs.docker.com/get-started/get-docker/) и запустите его.
2. Перейдите в терминале в корень проекта, создайте и активируйте виртуальное окружение
Windows:
```commandline
python -m venv .venv
.venv/Scripts/activate
```
Linux:
```bash
python -m venv .venv
source .venv/bin/activate
```
3. Создайте в корне проекта файл .env и настройте его
```.env
DB_HOST=localhost
DB_PORT=5432
DB_USER=user
DB_PASS=1234
DB_NAME=flats
```
Запустите файл init.py для создания базы данных
```bash
python -m init.py
```
**ВАЖНО**: После этого поменяйте значение DB_HOST на db!

4. Запутите сборку образов и контейнеры командой
```bash
docker-compose up -d --build
```
Для последующих запусков без изменения кода можно использовать просто
```commandline
docker-compose up -d
```
5. Проект будет доступен по адресу: http://localhost:3000
6. Для остановки проекта выполните команду
```bash
docker-compose down
```
## Структура проекта
```commandline
.
├── Backend
│   ├── Dockerfile
│   └── main.py
├── config.py
├── database
│   ├── config.py
│   ├── core.py
│   ├── database.py
│   ├── __init__.py
│   ├── models.py
│   └── __pycache__
├── docker-compose.yml
├── Frontend
│   ├── Dockerfile
│   ├── eslint.config.js
│   ├── index.html
│   ├── nginx.conf
│   ├── package.json
│   ├── README.md
│   ├── src
│   │   ├── api
│   │   │   └── index.js
│   │   ├── App.jsx
│   │   ├── FlatCard.jsx
│   │   ├── FlatsHistogram.jsx
│   │   ├── FlatsList.jsx
│   │   ├── FlatsScatter.jsx
│   │   ├── FlatsStatsPanel.jsx
│   │   ├── HistogramOptions.jsx
│   │   ├── main.jsx
│   │   ├── MetroStationAutocomplete.jsx
│   │   └── ScatterOptions.jsx
│   └── vite.config.js
├── init.py
├── parsing
│   ├── Dockerfile
│   ├── main.py
│   ├── Parser.py
│   ├── scheduler.py
│   └── test.py
├── README.md
└── requirements.txt
```

## Документация

-