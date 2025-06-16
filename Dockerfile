# Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Vite corre en el puerto 5173
EXPOSE 5173

CMD ["npm", "run", "dev"]