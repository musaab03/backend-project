<h1 align="center">Welcome to the House of Games API 👋</h1>

> API for the purpose of accessing application data programmatically. The intention here is to mimic the building of a real world backend service (such as reddit) which should provide this information to the front end architecture.

### ✨ [Demo](https://portfolio-red-iota-12.vercel.app/)

![image](https://user-images.githubusercontent.com/103457332/198995063-038d52d4-ae83-4b74-a356-f658d5448c65.png)


## Install

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
   Done!

## Usage
```sh
npm run start
```

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

# Tools and Technologies Used
- NodeJS
- ExpressJS
- PostgreSQL
- Jest Testing
- Deployment via Heroku

## Author

👤 **Musaab Uppal**

* Github: [@musaab03](https://github.com/musaab03)
* LinkedIn: [@musaab-uppal](https://linkedin.com/in/musaab-uppal)
