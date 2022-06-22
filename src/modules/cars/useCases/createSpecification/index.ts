import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateSpecificationController } from "./createSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const categoryRepository = null;
const createSpecificationUseCase = new CreateSpecificationUseCase(
  categoryRepository
);
export const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);
