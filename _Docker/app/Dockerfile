FROM node:12-slim

WORKDIR /app

# necessário para o comando "ps" do nestjs funcionar.
RUN apt-get update && apt-get -y install procps

RUN npm install -g typescript
RUN npm install -g @nestjs/cli

COPY ./app/entrypoint.sh /entrypoint.sh
RUN chmod 777 /entrypoint.sh
