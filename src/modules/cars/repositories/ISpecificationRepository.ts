import { ICreateSpecificationDto } from "../dto/SpecificationDto";
import { Specification } from "../model/Specification";

export interface ISpecificationRepository {
  create({ description, name }: ICreateSpecificationDto): void;
  findByName(name: string): Specification;
}
