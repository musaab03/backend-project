const { selectCategories } = require("../models/categories");

exports.sendCategories = (req, res, next) => {
  selectCategories()
    .then((categories) => {
      res.status(200).send({ categories });
    })
    .catch((err) => {
      if (res.body == undefined) {
        next(err);
      }
    });
};
