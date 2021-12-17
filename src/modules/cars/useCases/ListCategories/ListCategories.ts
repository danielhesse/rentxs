import { Category } from '../../models/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class ListCategories {
  constructor(private readonly categoriesRepository: ICategoriesRepository) {
    // Constructor Content
  }

  execute(): Category[] {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategories };
