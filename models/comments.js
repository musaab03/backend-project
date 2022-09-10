const db = require("../db/connection");

exports.selectCommentsFromReviewId = (id) => {
  return db
    .query("SELECT * FROM comments WHERE review_id = $1;", [id])
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

exports.createComment = (data, id) => {
  return db
    .query(
      "INSERT INTO comments (body, author, review_id) VALUES ($1, $2, $3) RETURNING *;",
      [data.body, data.username, id]
    )
    .then((response) => response.rows[0]);
};

exports.removeComment = (id) => {
  return db
    .query("DELETE FROM comments WHERE comment_id = $1;", [id])
    .then((response) => {});
};
