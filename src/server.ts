import express from "express";
import { routes } from "./routes/categories.routes";

const port = 3333;
const app = express();
app.use(express.json());
app.use("/categories", routes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
