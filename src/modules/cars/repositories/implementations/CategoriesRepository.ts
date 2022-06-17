import { ICreateCategoryDTO } from "../../dto/CategoriesDto";
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

import { Repository } from "typeorm";
import AppDataSource from "../../../../database/data-source";

// DTO=> Data transfer object
// singleton pattern
export class CategoriesRepository implements ICategoriesRepository {

  private repository: Repository<Category>

  // eslint-disable-next-line no-use-before-define
  private static INSTACE: CategoriesRepository;

  private constructor() {
    this.repository = AppDataSource.getRepository(Category)
  }

  public static getInstace(): CategoriesRepository {
    if (!CategoriesRepository.INSTACE) {
      CategoriesRepository.INSTACE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTACE;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name
    })

    await this.repository.save(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}
