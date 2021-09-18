FROM node:16.9.1-buster-slim

WORKDIR /usr/src/frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]