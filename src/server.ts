import express from "express";

const port = 3333;
const app = express();
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
