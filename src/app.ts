import express from 'express';
import { router } from './routes/index.js';
import swaggerUI from 'swagger-ui-express';
import { readFile } from 'fs/promises';
import { AppDataSource } from './database/index.js';

async function startServer(): Promise<void> {
  const swaggerFile = JSON.parse(
    await readFile(new URL('./swagger.json', import.meta.url), 'utf-8'),
  );
  AppDataSource.initialize();
  const app = express();

  app.use(express.json());
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
  app.use(router);

  app.listen(3333, () => console.log('Server is running'));
}

export { startServer };
