FROM node:10-alpine

RUN set -ex; apk add --no-cache --virtual .fetch-deps curl tar git ;

WORKDIR /app

COPY package.json /app

RUN npm install --production

COPY controllers /app/controllers
COPY app.js /app
COPY Models /app/Models

EXPOSE 3000

CMD node app.js