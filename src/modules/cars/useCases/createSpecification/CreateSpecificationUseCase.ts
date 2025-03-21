import { inject, injectable } from 'tsyringe';
import { ISpecificationRepository } from '../../repositories/ISpecificationRepository.js';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationRepository')
    private specificationsRepository: ISpecificationRepository,
  ) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);
    if (specificationAlreadyExists) {
      throw new Error('Specification already exists!');
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
