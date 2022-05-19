import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./createCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstace();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

export const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);
