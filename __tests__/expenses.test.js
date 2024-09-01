import request from "supertest";
import app from "../app.js";

describe("Expenses API", () => {
  it("should calculate expenses for a valid address", async () => {
    const address = "0xce94e5621a5f7068253c42558c147480f38b5e0d";
    const response = await request(app).get(`/api/v1/expenses/${address}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("totalExpenses");
    expect(response.body).toHaveProperty("currentPrice");
  });

  it("should return 404 if no transactions are found", async () => {
    const address = "0xce94e5621a5f7068253c42558c147480f38b5e22";
    const response = await request(app).get(`/api/v1/expenses/${address}`);
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toBe("No transactions found for this address.");
  });
});
