import { Request, Response } from 'express';

import { CreateSpecification } from './CreateSpecification';

class CreateSpecificationController {
  constructor(private readonly createSpecification: CreateSpecification) {
    // Constructor Content
  }

  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    const specification = this.createSpecification.execute({
      name,
      description,
    });

    return response.status(201).json(specification);
  }
}

export { CreateSpecificationController };
