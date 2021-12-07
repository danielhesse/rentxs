import { Request, Response, Router } from 'express';

import { categoriesRouter } from './categories.routes';

const router = Router();

router.use('/categories', categoriesRouter);

// Page/Route 404
router.use((_: Request, response: Response) => {
  return response.status(404).json({
    error: 'NotFound',
    message: 'Page not found!',
  });
});

export { router };
