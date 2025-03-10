import { Router } from 'express';
import multer, { Multer } from 'multer';
import createCategoryController from '../modules/cars/useCases/createCategory/index.js';
import { listCategoriesController } from '../modules/cars/useCases/listCategories/index.js';
import { importCategoryController } from '../modules/cars/useCases/importCategory/index.js';

const categoriesRoutes = Router();

const upload: any = multer({
  dest: './tmp',
});

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController().handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
