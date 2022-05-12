import express from "express";
import { routes } from "./routes/categories.routes";

const port = 3333;
const app = express();
app.use(routes);
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
