import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateSpecificationController } from "./createSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const categoryRepository = CategoriesRepository.getInstace();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  categoryRepository
);
export const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);
