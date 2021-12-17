import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ListCategories } from './ListCategories';
import { ListCategoriesController } from './ListCategoriesController';

const categoriesRepository = CategoriesRepository.getInstance();
const listCategories = new ListCategories(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategories);

export { listCategoriesController };
