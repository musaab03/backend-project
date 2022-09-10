# House of Games API

## Background

API for the purpose of accessing application data programmatically. The intention here is to mimic the building of a real world backend service (such as reddit) which should provide this information to the front end architecture.

To visit the hosted version of the api [click here](https://houseofgamesbackendapi.herokuapp.com)

Database used will be PSQL (version 12.12), using [node-postgres](https://node-postgres.com/) (version 8.7.3) to interact with it.

## Setting up environment

Create 2 .env files (.env.test & .env.development)

In .env.test add the following line - PGDATABASE=nc_games_test

In .env.development add the following line - PGDATABASE=nc_games

Do npm install to also import all the needed modules

Excecute the following commands to seed the database - npm run setup-dbs && npm run seed
