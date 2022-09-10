const { selectCommentsFromReviewId } = require("../models/comments");

exports.sendComments = (req, res, next) => {
  const { id } = req.params;

  selectCommentsFromReviewId(id)
    .then((comments) => {
      res.status(200).send({ comments });
    })
    .catch(next);
};
