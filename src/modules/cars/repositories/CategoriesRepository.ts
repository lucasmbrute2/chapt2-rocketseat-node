import { ICreateCategoryDTO } from "../dto/CategoriesDto";
import { Category } from "../model/Category";
import { ICategoriesRepository } from "./ICategoriesRepository";

// DTO=> Data transfer object
// singleton pattern
export class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];
  // eslint-disable-next-line no-use-before-define
  private static INSTACE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstace(): CategoriesRepository {
    if (!CategoriesRepository.INSTACE) {
      CategoriesRepository.INSTACE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTACE;
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
