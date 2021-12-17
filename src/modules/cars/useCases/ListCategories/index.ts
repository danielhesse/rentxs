import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ListCategories } from './ListCategories';
import { ListCategoriesController } from './ListCategoriesController';

const categoriesRepository = new CategoriesRepository();
const listCategories = new ListCategories(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategories);

export { listCategoriesController };
