#!/bin/sh

echo "⏳ Waiting for database..."
sleep 3

echo "📦 Running migrations..."
python manage.py migrate --noinput

echo "📁 Collect static..."
python manage.py collectstatic --noinput

echo "🚀 Starting Gunicorn..."
exec gunicorn config.wsgi:application --bind 0.0.0.0:8001
