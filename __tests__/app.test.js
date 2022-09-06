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
        console.log(body);
        expect(body.msg).toBe("Not Found");
      });
  });
});

describe("GET", () => {
  describe("/api/categories: should return array of categories with slug and description properties", () => {
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
});
