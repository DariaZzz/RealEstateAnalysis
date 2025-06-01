FROM python:3.12-slim

WORKDIR /parser
ENV PYTHONPATH=/parser

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY parsing/main.py .
COPY parsing/Parser.py parsing/Parser.py
COPY parsing/scheduler.py .

COPY ./database /parser/database

COPY config.py .

CMD ["python", "scheduler.py"]