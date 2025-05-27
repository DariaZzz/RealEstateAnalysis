#!/bin/bash

cd "$(dirname "$0")" || exit

docker-compose build --no-cache
docker-compose run --rm parser