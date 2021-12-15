import { Category } from '../models/Category';
import { ICreateCategoryDTO } from './ICategoriesRepository';

class CategoriesRepository {
  private categories: Category[];
  private repository: Category;

  constructor() {
    this.categories = [];
    this.repository = new Category();
  }

  create({ name, description }: ICreateCategoryDTO) {
    const category = Object.assign(this.repository, {
      name,
      description,
    });

    this.categories.push(category);

    return category;
  }

  list() {
    return this.categories;
  }

  findByName(name: string) {
    const category = this.categories.find(category => category.name === name);

    return category;
  }
}

export { CategoriesRepository };
