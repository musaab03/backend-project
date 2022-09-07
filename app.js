const express = require("express");
const app = express();

const { sendCategories } = require("./controllers/categories");
const { sendReview } = require("./controllers/reviews");
const { sendUsers } = require("./controllers/users");

app.use(express.json());

app.get("/api/categories", sendCategories);
app.get("/api/reviews/:id", sendReview);
app.get("/api/users", sendUsers);

app.use((req, res, next) => {
  res.status(404).send({ msg: "Not Found" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: "Internal server error" });
});

module.exports = app;
