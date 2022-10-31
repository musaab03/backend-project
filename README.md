# House of Games API

## Background

API for the purpose of accessing application data programmatically. The intention here is to mimic the building of a real world backend service (such as reddit) which should provide this information to the front end architecture.

The API is hosted at the following address [https://houseofgamesbackendapi.herokuapp.com](https://houseofgamesbackendapi.herokuapp.com)

Database used will be PSQL (version 12.12), using [node-postgres](https://node-postgres.com/) (version 8.7.3) to interact with it.

## Setting up environment

- First, fork the repo to your own account
- Clone the repo on to your local machine with the following line </br>
  ``
  git clone https://github.com/musaab03/backend-api
  ``
  </br></br>Then cd into the directory

- Create 2 .env files (.env.test & .env.development)

  In .env.test add the following line ``PGDATABASE=nc_games_test``

  In .env.development add the following line  ``PGDATABASE=nc_games``

- Excecute the following line to import all the needed modules </br>
   ``
   npm install
   ``


Excecute the following commands to seed the database - npm run setup-dbs && npm run seed
