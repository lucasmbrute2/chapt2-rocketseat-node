import { ICreateSpecificationDto } from "../dto/SpecificationDto";
import { Specification } from "../entities/Specification";

export interface ISpecificationRepository {
  create({ description, name }: ICreateSpecificationDto): void;
  findByName(name: string): Specification;
}
