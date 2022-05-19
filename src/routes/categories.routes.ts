import { Router } from "express";
import multer from "multer";
import { createCategoryController } from "../modules/cars/useCases/createCategory/index";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRouter = Router();
const upload = multer({
  dest: "./tmp",
});

categoriesRouter.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRouter.get("/", (req, res) => {
  listCategoriesController.handle(req, res);
});

categoriesRouter.post("/import", upload.single("file"), (req, res) => {
  importCategoryController.handle(req, res);
});

export { categoriesRouter };
