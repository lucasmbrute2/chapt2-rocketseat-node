import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";
import { router } from "./routes";
import swaggerFile from "./swagger.json";
import { createConnection } from "./database/data-source";

createConnection()

const port = 3333;
const app = express();
app.use(express.json());
app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
