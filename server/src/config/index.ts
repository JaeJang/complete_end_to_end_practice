import { ConnectionOptions } from "typeorm";
import { User } from "../entities/User";

export const DB_CONFIG :ConnectionOptions = {
  name: process.env.DB_NAME,
  type: 'postgres',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  entities: [User],
  synchronize: true
};