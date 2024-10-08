import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// Swagger configuration
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "KoinX API",
    version: "1.0.0",
    description: "API documentation for the KoinX assignment",
  },
  servers: [
    {
      url: "https://koinx-d3ih.onrender.com",
      description: "Production server",
    },
    {
      url: "http://localhost:3001",
      description: "Development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

delete swaggerSpec.components;

export const swaggerDocs = {
  swaggerUi,
  swaggerSpec,
};
