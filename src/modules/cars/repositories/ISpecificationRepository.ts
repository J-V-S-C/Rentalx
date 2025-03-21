import { Specification } from '../entities/Specification.js';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification | void;
  list(): Specification[];
}

export { ISpecificationRepository, ICreateSpecificationDTO };
