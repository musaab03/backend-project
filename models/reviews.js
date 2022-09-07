const db = require("../db/connection");

exports.selectReviewById = (id) => {
  return db
    .query("SELECT * FROM reviews WHERE review_id = $1;", [id])
    .then((response) => {
      if (response.rowCount == 0) {
        return Promise.reject({ status: 404, msg: "Review not found" });
      } else {
        return response.rows[0];
      }
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
