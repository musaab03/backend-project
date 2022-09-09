const app = require("../app");
const request = require("supertest");
const db = require("../db/connection");
const seed = require("../db/seeds/seed");
const seededData = require("../db/data/test-data/index");

afterAll(() => {
  return db.end();
});

beforeEach(() => {
  return seed(seededData);
});

describe("Error Handling", () => {
  test("404: for endpoint that does not exist", () => {
    return request(app)
      .get("/api/bananas")
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe("Path not found");
      });
  });
});

describe("GET", () => {
  describe("/api/categories: should return array of category objects", () => {
    test("200: for returning the array of categories", () => {
      return request(app)
        .get("/api/categories")
        .expect(200)
        .then((response) => {
          const { body } = response;

          expect(Array.isArray(body.categories)).toBe(true);
          expect(body.categories.length > 0).toBe(true);

          body.categories.forEach((category) => {
            expect(typeof category.slug).toBe("string");
            expect(typeof category.description).toBe("string");
          });
        });
    });
  });

  describe("/api/reviews/:id: should return specified review from id", () => {
    test("404: for review that does not exist", () => {
      return request(app)
        .get("/api/reviews/9999")
        .expect(404)
        .then(({ body }) => {
          expect(body.msg).toBe("Review not found");
        });
    });

    test("200: for returning review from id", () => {
      return request(app)
        .get("/api/reviews/2")
        .expect(200)
        .then((response) => {
          const { body } = response;
          expect(body.review.title).toBe("Jenga");
          expect(body.review.category).toBe("dexterity");
          expect(body.review.designer).toBe("Leslie Scott");
          expect(body.review.owner).toBe("philippaclaire9");
          expect(body.review.review_body).toBe("Fiddly fun for all the family");
          expect(body.review.review_img_url).toBe(
            "https://www.golenbock.com/wp-content/uploads/2015/01/placeholder-user.png"
          );
          expect(typeof body.review.created_at).toBe("string");
          expect(body.review.votes).toBe(5);
          expect(body.review.comment_count).toBe(3);
        });
    });

    test("200: for returning review from id with no comments", () => {
      return request(app)
        .get("/api/reviews/1")
        .expect(200)
        .then((response) => {
          const { body } = response;
          expect(body.review.title).toBe("Agricola");
          expect(body.review.category).toBe("euro game");
          expect(body.review.designer).toBe("Uwe Rosenberg");
          expect(body.review.owner).toBe("mallionaire");
          expect(body.review.review_body).toBe("Farmyard fun!");
          expect(body.review.review_img_url).toBe(
            "https://www.golenbock.com/wp-content/uploads/2015/01/placeholder-user.png"
          );
          expect(typeof body.review.created_at).toBe("string");
          expect(body.review.votes).toBe(1);
          expect(body.review.comment_count).toBe(0);
        });
    });
  });

  describe("/api/users: should return array of user objects", () => {
    test("200: for returnng the array of users", () => {
      return request(app)
        .get("/api/users")
        .expect(200)
        .then((response) => {
          const { body } = response;
          expect(Array.isArray(body.users)).toBe(true);
          expect(body.users.length > 0).toBe(true);

          body.users.forEach((user) => {
            expect(typeof user.username).toBe("string");
            expect(typeof user.name).toBe("string");
            expect(typeof user.avatar_url).toBe("string");
          });
        });
    });
  });
});

describe("PATCH", () => {
  describe('"/api/reviews/:review_id: should update review vote count based off inputted object"', () => {
    test("400: for inputting an empty object", () => {
      return request(app)
        .patch("/api/reviews/1")
        .send({})
        .expect(400)
        .then(({ body }) => {
          expect(body.msg).toBe("Inputted data is empty");
        });
    });

    test("200: for updating and returning edited review object", () => {
      const data = { inc_votes: 2 };
      return request(app)
        .patch("/api/reviews/2")
        .send(data)
        .expect(200)
        .then((response) => {
          const { body } = response;
          expect(body.review.votes).toBe(7);
        });
    });
  });
});
