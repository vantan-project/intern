FROM node:22-slim
WORKDIR /frontend

COPY . .
WORKDIR /frontend/next-app
RUN npm install
CMD ["npm", "run", "dev"]
EXPOSE 3000