FROM node:16.14-alpine

WORKDIR /app-backend

RUN npm install

copy . .

EXPOSE 3001

CMD ["npm", "start"]