const db = require("../db/connection");

exports.selectReviewById = (id) => {
  return db
    .query(
      "SELECT reviews.*, COUNT(comments.review_id)::INT AS comment_count FROM reviews LEFT JOIN comments ON reviews.review_id = comments.review_id WHERE reviews.review_id = $1 GROUP BY reviews.review_id;",
      [id]
    )
    .then((response) => {
      if (response.rowCount == 0) {
        return Promise.reject({ status: 404, msg: "Review not found" });
      } else {
        return response.rows[0];
      }
    });
};

exports.selectComments = (id) => {
  return db
    .query("SELECT * FROM comments WHERE review_id = $1", [id])
    .then((response) => {
      return response.rows[0];
    });
};

exports.editReviewVotes = (data, id) => {
  if (Object.keys(data) == 0) {
    return Promise.reject({
      status: 400,
      msg: "Inputted data is empty",
    });
  }
  return db
    .query(
      `UPDATE reviews SET votes = (votes + ${data.inc_votes}) WHERE review_id = ${id} RETURNING *`
    )
    .then((response) => response.rows[0]);
};
