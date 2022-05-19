import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory/index";

const routes = Router();

routes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

routes.get("/", (req, res) => {});

export { routes };
