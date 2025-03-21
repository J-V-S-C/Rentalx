import { DataSource } from 'typeorm';
import 'dotenv/config';
import { Category } from '../modules/cars/entities/category.js';

if (typeof process.env.DB_PORT === 'undefined') {
  throw new Error('Invalid port type');
}
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Category],
  migrations: ['./src/database/migrations/*.ts'],
});
