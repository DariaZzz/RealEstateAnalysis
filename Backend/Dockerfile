FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt
RUN pip install gunicorn

COPY Backend/ ./Backend/
COPY database/ ./database/

EXPOSE 5000

CMD ["python", "Backend/main.py"]