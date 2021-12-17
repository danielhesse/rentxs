import { Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/CreateCategory';
import { listCategoriesController } from '../modules/cars/useCases/ListCategories';

const categoriesRouter = Router();

categoriesRouter.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRouter.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRouter };
