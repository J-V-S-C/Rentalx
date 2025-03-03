import { Category } from '../../model/category.js';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository.js';

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;
  private constructor() {
    this.categories = [];
  }

  public static geiInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | null {
    const category = this.categories.find((category) => category.name === name);
    if (category) return category;
    return null;
  }
}

export { CategoriesRepository };
