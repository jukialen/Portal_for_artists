FROM node:16.9.1-buster-slim

WORKDIR /usr/src/frontend

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install

COPY src .

EXPOSE 3000

CMD [ "npm", "start" ]