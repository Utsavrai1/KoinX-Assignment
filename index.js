import checkHealthRoutes from "./routes/checkServerHealthRoute.js";
import { fetchPrices } from "./cron/fetchPrices.js";
import cron from "node-cron";
import { swaggerDocs } from "./swagger/swagger.js";
import app from "./app.js";
import { connectDB } from "./config/databaseConfig.js";

if (process.env.NODE_ENV === "development") {
  const morgan = await import("morgan");
  app.use(morgan.default("tiny"));
}

connectDB();

// Serve Swagger API docs
app.use(
  "/api-docs",
  swaggerDocs.swaggerUi.serve,
  swaggerDocs.swaggerUi.setup(swaggerDocs.swaggerSpec)
);

// Cron job to fetch ethereum price every 10 minutes
cron.schedule("*/10 * * * *", async () => {
  await fetchPrices();
});

app.get("/", async (req, res) => {
  return res.send("KoinX Assignment");
});

//Check Health of the Server
app.use("/health", checkHealthRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
