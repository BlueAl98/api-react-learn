# Dockerfile
FROM node:20-alpine

# 👇 Add polling support for file watching (used by Vite in Docker)
ENV CHOKIDAR_USEPOLLING=true

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Vite corre en el puerto 5173
EXPOSE 5173

CMD ["npm", "run", "dev"]