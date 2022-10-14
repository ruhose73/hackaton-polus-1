# [Хакатон Полюс - Кейс Mobile/Web](https://polyus-hack.ru/)

## Установка и запуск

* [Установка и запуск без докера](https://github.com/ruhose73/test-backend/blob/main/docs/CLEAR.MD)
* [Установка и запуск с докером](https://github.com/ruhose73/test-backend/blob/main/docs/DOCKER.MD)

## Сервера

* Сервер API локальный: `http://localhost:5000`
* Сервер локальный документации: `http://localhost:5000/docs`
* Сервер API: `http://:5000`
* Сервер документации: `http://:5000/docs/`

#### Миграция базы данных

Дамп базы данных сделан в двух форматах:

* `custom` - формат PostgreSQL (через `pg_restore`)
* `plain` - формат SQL (если хочется ручками)

Дампы хранятся в папке `migration-pg` в проекте

#### SWAGGER

Задокументированы все запросы данного API  
Документация доступна после запуска проекта по адресу: `http://:5000/docs/`  
Либо же при локальном запуске по адресу:`http://localhost:5000/docs/`
