import { ICreateCategoryDTO } from "../../dto/CategoriesDto";
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

import { Repository } from "typeorm";
import { AppDataSource } from "../../../../database/data-source";

// DTO=> Data transfer object
// singleton pattern
export class CategoriesRepository implements ICategoriesRepository {

  private repository: Repository<Category>

  constructor() {
    this.repository = AppDataSource.getRepository(Category)
  }

  async createCategory({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name
    })

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOneBy({ name })
    return category
  }
}
