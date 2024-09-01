import { connectDB, closeDB } from "../config/databaseConfig.js";

beforeAll(async () => {
  await connectDB("TEST");
});

afterAll(async () => {
  await closeDB("TEST");
});
