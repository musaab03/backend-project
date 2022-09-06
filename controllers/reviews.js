const { selectReviewById } = require("../models/reviews");

exports.sendReview = (req, res, next) => {
  const { id } = req.params;

  selectReviewById(id).then((review) => {
    if (review == undefined) {
      res.status(404).send({ msg: "Not Found" });
    } else {
      res.status(200).send({ review });
    }
  });
};
