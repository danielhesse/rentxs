import { Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/CreateCategory';

const categoriesRouter = Router();

categoriesRouter.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

// categoriesRouter.get('/', (request, response) => {
//   const all = categoriesRepository.list();

//   return response.status(200).json(all);
// });

export { categoriesRouter };
