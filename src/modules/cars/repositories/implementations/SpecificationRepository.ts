import { ICreateSpecificationDto } from "../../dto/SpecificationDto";
import { Specification } from "../../model/Specification";
import { ISpecificationRepository } from "../ISpecificationRepository";

export class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ description, name }: ICreateSpecificationDto): void {
    const specification = new Specification();

    Object.assign(specification, {
      description,
      name,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find((el) => el.name === name);
    return specification;
  }
}
