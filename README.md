# Primeiro uso
- Siga os passos da [instalação](#installation) conforme seu ambiente (docker ou local) - Docker é recomendado
- Execute as migrations e seeder conforme a [documentação](#migrations)

# Installation

- O início da aplicação pode ser local ou via Docker

### Docker

Primeiro de tudo, é necessário rodar o build local das imagens docker.

```
$ docker-compose -f docker-compose-build build 
```

Em seguida, podemos iniciar o app, também com Docker

```
$ docker-compose up 
```

### Local

- Sem Docker é necessário a instação manual de algumas dependências, conforme descritas nos arquivos Dockerfiles, segue lista:

- MySQL 5.7
- Nest CLI (npm -i g @nestjs/cli)

```
$ cd app
$ npm install
$ npm run start:dev
```

### Migrations

- Migrations em Knex (http://knexjs.org/#Migrations-CLI)

Para rodar as migrations, é necessário acessar o container
```
$ docker exec -it nest-migrations bash
$ knex migrate:run
$ knex seed:run
```
