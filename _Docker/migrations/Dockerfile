FROM node:12-slim

WORKDIR /app

RUN npm install -g knex

COPY ./entrypoint.sh /entrypoint.sh
RUN chmod 777 /entrypoint.sh
