#!/bin/bash
# entrypoint.sh

# Ждём, пока Postgres будет доступен
echo "⏳ Waiting for database..."
while ! pg_isready -h db -p 5432 -U postgres; do
  sleep 1
done

# Выполняем миграции
echo "📦 Running migrations..."
python manage.py migrate

# Собираем статику
echo "📁 Collect static..."
python manage.py collectstatic --noinput

# Запускаем Gunicorn
echo "🚀 Starting Gunicorn..."
exec gunicorn config.wsgi:application \
   --bind 0.0.0.0:8001 \
    --workers 3 \
    --timeout 120 \
    --access-logfile - \
    --error-logfile -