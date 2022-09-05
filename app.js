const express = require("express");
const app = express();

app.use(express.json());

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: "Internal server error" });
});

const PORT = 9090;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
