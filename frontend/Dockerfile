# # Node 20
# FROM node:20-alpine

# WORKDIR /app

# # Копируем package.json и package-lock.json / yarn.lock
# COPY frontend/package*.json ./ 

# # Устанавливаем зависимости
# RUN npm install

# # Копируем весь фронтенд
# COPY frontend/ .


# # Собираем проект
# RUN npm run build

# # Экспонируем порт Next.js
# EXPOSE 3000

# # Старт Next.js в production режиме
# CMD ["npm", "start"]
# Node 20 на Alpine
FROM node:20-alpine

WORKDIR /app

# Копируем package.json и package-lock.json
COPY frontend/package*.json ./

# Устанавливаем зависимости с флагами для слабого сервера
RUN npm install --legacy-peer-deps --network-timeout=100000

# Копируем весь фронтенд
COPY frontend/ .

# Сборка проекта с ограничением памяти для Node
RUN node --max-old-space-size=512 node_modules/.bin/next build

# Экспонируем порт Next.js
EXPOSE 3000

# Старт Next.js в production режиме
CMD ["npm", "start"]
