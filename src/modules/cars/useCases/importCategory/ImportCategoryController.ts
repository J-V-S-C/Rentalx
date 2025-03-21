import { Request, Response } from 'express';
import { ImportCategoryUseCase } from './ImportCategoryUseCase.js';
import { container } from 'tsyringe';

class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;
    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

    if (!file) return response.status(400).json({ error: 'File is required' });

    await importCategoryUseCase.execute(file);

    return response.send();
  }
}

export { ImportCategoryController };
