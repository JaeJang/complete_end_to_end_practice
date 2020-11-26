import * as dotenv from "dotenv";
import { ConnectionOptions } from "typeorm";
import Entities from "../entities";

let path;
switch (process.env.NODE_ENV) {
  case "production":
    path = `${__dirname}/../../.env.production`;
    break;
  default:
    path = `${__dirname}/../../.env`;
}

dotenv.config({ path: path });

export const DB_CONFIG: ConnectionOptions = {
  type: "postgres",
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  entities: Entities,
  synchronize: true,
};
