import { Request, Response, Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRouter = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRouter.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  const category = createCategoryService.execute({ name, description });

  return response.status(201).json(category);
});

categoriesRouter.get('/', (request: Request, response: Response) => {
  const all = categoriesRepository.list();

  return response.status(200).json(all);
});

export { categoriesRouter };
