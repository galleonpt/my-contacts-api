# Usefull commands

## Start Postgres

- docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
- docker start pg