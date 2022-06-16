import { ICreateCategoryDTO } from "../dto/CategoriesDto";
import { Category } from "../entities/Category";

export interface ICategoriesRepository {
  findByName: (name: string) => Category;
  list: () => Category[];
  create({ description, name }: ICreateCategoryDTO): void;
}
