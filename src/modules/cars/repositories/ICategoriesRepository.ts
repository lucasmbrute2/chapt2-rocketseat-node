import { ICreateCategoryDTO } from "../dto/CategoriesDto";
import { Category } from "../entities/Category";

export interface ICategoriesRepository {
  findByName: (name: string) => Promise<Category>;
  list: () => Promise<Category[]>
  create({ description, name }: ICreateCategoryDTO): Promise<void>;
}
