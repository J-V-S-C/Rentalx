import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory/index.js';
import { listCategoriesController } from '../modules/cars/useCases/listCategories/index.js';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
