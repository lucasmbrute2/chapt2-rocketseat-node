import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const routes = Router();
const categoryRepository = new CategoriesRepository();

routes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoryRepository);
  try {
    createCategoryService.execute({ description, name });
  } catch (e) {
    res.status(401).send({ error: e.message });
  }

  return res.status(201).send();
});

routes.get("/", (req, res) => {
  const allCategories = categoryRepository.list();

  return res.json(allCategories);
});

export { routes };
