import express from "express";
import { routes } from "./routes/categories.routes";
import { specificationRoutes } from "./routes/specifications.routes";

const port = 3333;
const app = express();
app.use(express.json());
app.use("/categories", routes);
app.use("/specifications", specificationRoutes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
