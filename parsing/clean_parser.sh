#!/bin/bash

PROJECT_NAME="$(pwd)"

echo "Очистка"
echo "$PROJECT_NAME"

docker-compose down

echo "Очистка Parsing завершена"