const db = require("../db/connection");

exports.selectCommentsFromReviewId = (id) => {
  return db
    .query("SELECT * FROM comments WHERE review_id = $1", [id])
    .then((response) => {
      if (response.rowCount == 0) {
        return Promise.reject({
          status: 400,
          msg: "No comments exist for specified review_id",
        });
      } else {
        return response.rows;
      }
    });
};
