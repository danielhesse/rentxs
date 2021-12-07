import { Request, Response, Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRouter = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRouter.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return response
      .status(400)
      .json({ error: 'BadRequest', message: 'Category already exists!' });
  }

  const category = categoriesRepository.create({
    name,
    description,
  });

  return response.status(201).json(category);
});

categoriesRouter.get('/', (request: Request, response: Response) => {
  const all = categoriesRepository.list();

  return response.status(200).json(all);
});

export { categoriesRouter };
