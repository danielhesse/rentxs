import { Specification } from '../../models/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): Specification {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
    });

    this.specifications.push(specification);

    return specification;
  }

  findByName(name: string): Specification | void {
    const specification = this.specifications.find(
      specification => specification.name === name,
    );

    return specification;
  }
}

export { SpecificationsRepository };
