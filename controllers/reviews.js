const {
  selectReviewById,
  editReviewVotes,
  selectAllReviews,
} = require("../models/reviews");

exports.sendAllReviews = (req, res, next) => {
  const { category } = req.query;

  selectAllReviews(category)
    .then((reviews) => {
      res.status(200).send({ reviews });
    })
    .catch(next);
};

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
