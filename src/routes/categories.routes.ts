import { Router } from "express";

const routes = Router();

const categories = [];

routes.post("/categories", (req, res) => {
  const { name, description } = req.body;

  categories.push({
    name,
    description,
  });

  return res.status(201);
});

export { routes };
