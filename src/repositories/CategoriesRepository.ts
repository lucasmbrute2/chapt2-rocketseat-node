import { Category } from "../model/Category";
import { ICategoriesRepository } from "./ICategoriesRepository";

// DTO=> Data transfer object
export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}
