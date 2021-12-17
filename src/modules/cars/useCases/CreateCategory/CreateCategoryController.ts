import { Request, Response } from 'express';

import { CreateCategory } from './CreateCategory';

class CreateCategoryController {
  constructor(private readonly createCategory: CreateCategory) {
    // Constructor Content
  }

  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    const category = this.createCategory.execute({ name, description });

    return response.status(201).json(category);
  }
}

export { CreateCategoryController };
