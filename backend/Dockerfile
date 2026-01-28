# # Используем Python 3.10 slim
# FROM python:3.10-slim

# # Устанавливаем зависимости
# ENV PYTHONDONTWRITEBYTECODE 1
# ENV PYTHONUNBUFFERED 1

# WORKDIR /app

# # Копируем requirements
# COPY backend/requirements.txt .

# # Устанавливаем зависимости
# RUN pip install --upgrade pip
# RUN pip install -r requirements.txt

# # Копируем весь бэкенд
# COPY backend/ .

# # Создаем папку для медиа
# RUN mkdir -p /app/media

# # Запуск Django
# CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8001"]

FROM python:3.10-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app
# Устанавливаем клиент Postgres, чтобы команда pg_isready заработала
RUN apt-get update && apt-get install -y \
    postgresql-client \
    && rm -rf /var/lib/apt/lists/*

COPY backend/requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt


COPY backend/ .

RUN mkdir -p /app/media
RUN chmod +x /app/entrypoint.sh

ENTRYPOINT ["/app/entrypoint.sh"]
EXPOSE 8001
