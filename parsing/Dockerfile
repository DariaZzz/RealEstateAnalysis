FROM python:3.12-slim

WORKDIR /parser
ENV PYTHONPATH=/parser

COPY parsing/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY parsing/main.py .
COPY parsing/Parser.py .
COPY config.py .
COPY scheduler.py .

CMD ["python", "scheduler.py"]