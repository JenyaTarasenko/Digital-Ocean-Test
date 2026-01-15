# Node 20
FROM node:20-alpine

WORKDIR /app

# Копируем package.json и package-lock.json / yarn.lock
COPY frontend/package*.json ./ 

# Устанавливаем зависимости
RUN npm install

# Копируем весь фронтенд
COPY frontend/ .

# Собираем проект
RUN npm run build

# Экспонируем порт Next.js
EXPOSE 3000

# Старт Next.js в production режиме
CMD ["npm", "start"]
