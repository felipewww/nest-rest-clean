# Instalação

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
