import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { CreateSpecification } from './CreateSpecification';
import { CreateSpecificationController } from './CreateSpecificationController';

const specificationsRepository = new SpecificationsRepository();
const createSpecification = new CreateSpecification(specificationsRepository);
const createSpecificationController = new CreateSpecificationController(
  createSpecification,
);

export { createSpecificationController };
