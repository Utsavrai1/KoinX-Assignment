import request from "supertest";
import app from "../app.js";

describe("Transaction API", () => {
  it("should fetch transactions for a valid address", async () => {
    const res = await request(app).get(
      "/api/v1/transactions/0xce94e5621a5f7068253c42558c147480f38b5e0d"
    );
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
    if (res.body.length > 0) {
      expect(res.body[0]).toHaveProperty("hash");
    }
  });

  it("should return 400 for an invalid address", async () => {
    const res = await request(app).get(
      "/api/v1/transactions/ce94e5621a5f7068253c42558c147480f38b5e0d"
    );
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });

  it("should return 404 if no transactions are found for the address", async () => {
    const res = await request(app).get(
      "/api/v1/transactions/0xce94e5621a5f7068253c42558c147480f38b5e22"
    );
    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty("error");
  });
});
