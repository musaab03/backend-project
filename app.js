const express = require("express");
const app = express();

const { sendCategories } = require("./controllers/categories");

//app.use(express.json());

app.get("/api/categories", sendCategories);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: "Internal server error" });
});

module.exports = app;
