const { selectReviewById, editReviewVotes } = require("../models/reviews");

exports.sendReview = (req, res, next) => {
  const { id } = req.params;

  selectReviewById(id)
    .then((review) => {
      res.status(200).send({ review });
    })
    .catch(next);
};

exports.sendUpdatedReview = (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  editReviewVotes(body, id)
    .then((review) => {
      res.status(200).send({ review });
    })
    .catch(next);
};
