# Используем Python 3.10 slim
FROM python:3.10-slim

# Устанавливаем зависимости
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

# Копируем requirements
COPY backend/requirements.txt .

# Устанавливаем зависимости
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Копируем весь бэкенд
COPY backend/ .

# Создаем папку для медиа
RUN mkdir -p /app/media

# Запуск Django
CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8001"]
