import { Category } from '../../models/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategory {
  constructor(private readonly categoriesRepository: ICategoriesRepository) {
    // Constructor Content
  }

  execute({ name, description }: IRequest): Category {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!');
    }

    const category = this.categoriesRepository.create({
      name,
      description,
    });

    return category;
  }
}

export { CreateCategory };
