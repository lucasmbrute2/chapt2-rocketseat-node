import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const routes = Router();

const categoriesRepository = new CategoriesRepository();

routes.post("/", (req, res) => {
  const { name, description } = req.body;

  categoriesRepository.create({
    name,
    description,
  });

  return res.status(201).send();
});

routes.get("/", (req, res) => {
  const allCategories = categoriesRepository.list();

  return res.json(allCategories);
});

export { routes };
