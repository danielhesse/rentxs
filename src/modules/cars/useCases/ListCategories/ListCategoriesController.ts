import { Request, Response } from 'express';

import { ListCategories } from './ListCategories';

class ListCategoriesController {
  constructor(private readonly listCategories: ListCategories) {
    // Constructor Content
  }

  handle(_: Request, response: Response) {
    const categories = this.listCategories.execute();

    return response.status(200).json(categories);
  }
}

export { ListCategoriesController };
