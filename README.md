# House of Games API

## Background

API for the purpose of accessing application data programmatically. The intention here is to mimic the building of a real world backend service (such as reddit) which should provide this information to the front end architecture.

The API is hosted at the following address [https://houseofgamesbackendapi.herokuapp.com](https://houseofgamesbackendapi.herokuapp.com)

Database used will be PSQL (version 12.12), using node-postgres (version 8.7.3) to interact with it.

## Setting up environment

1. First, fork the repo to your own account
2. Clone the repo on to your local machine with the following line </br>
```
git clone https://github.com/musaab03/backend-api
```
3. Then cd into the directory
4. Create 2 .env files (.env.test & .env.development)
5. In .env.test add the following line 
```
PGDATABASE=nc_games_test
```
6. In .env.development add the following line  
```
PGDATABASE=nc_games
```
7. Excecute the following line to import all the needed modules </br>
```
npm install
```
7. Excecute the following commands to seed the database
```
npm run setup-dbs
```
```
npm run seed
```

## Using the API

The API can be accessed through using a REST client such as [Insomnia](https://insomnia.rest/download) or through the [hosted link](https://houseofgamesbackendapi.herokuapp.com) </br>
Currently the API has 9 routes to access:
- GET /api/categories
- GET /api/reviews
- GET /api/reviews/:review_id
- GET /api/users
- GET /api/reviews/:review_id/comments
- PATCH /api/reviews/:review_id
- POST /api/reviews/:review_id/comments
- DELETE /api/comments/:comment_id

### Example
GET /api/categories
![image](https://user-images.githubusercontent.com/103457332/198995063-038d52d4-ae83-4b74-a356-f658d5448c65.png)
