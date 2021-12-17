import { Category } from '../../models/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];
  private repository: Category;

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
    this.repository = new Category();
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): Category {
    const category = Object.assign(this.repository, {
      name,
      description,
    });

    this.categories.push(category);

    return category;
  }

  findByName(name: string): Category | undefined {
    const category = this.categories.find(category => category.name === name);

    return category;
  }

  list(): Category[] {
    return this.categories;
  }
}

export { CategoriesRepository };
