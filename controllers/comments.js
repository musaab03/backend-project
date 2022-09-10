const {
  selectCommentsFromReviewId,
  createComment,
  removeComment,
} = require("../models/comments");

exports.sendComments = (req, res, next) => {
  const { id } = req.params;

  selectCommentsFromReviewId(id)
    .then((comments) => {
      res.status(200).send({ comments });
    })
    .catch(next);
};

exports.addComment = (req, res, next) => {
  const { id } = req.params;
  const { body } = req;

  createComment(body, id)
    .then((comment) => {
      res.status(201).send({ comment });
    })
    .catch(next);
};

exports.deleteComment = (req, res, next) => {
  const { id } = req.params;
  removeComment(id)
    .then(() => {
      res.status(204).send();
    })
    .catch(next);
};
