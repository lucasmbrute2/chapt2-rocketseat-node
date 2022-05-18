import { Category } from "../model/Category";

// DTO=> Data transfer object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export class CategoriesRepository {
  constructor(private categories: Category[]) {}

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
