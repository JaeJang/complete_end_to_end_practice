import express, { Express } from "express";
import bodyParser from "body-parser";
import DBManager from "./database/DatabaseManager";
import { AuthRouter } from "./routes/auth-routes";
import { createConnection } from "typeorm";
import { DB_CONFIG } from "./config";
import User from "./entities/User";

const PORT = process.env.PORT;

createConnection(DB_CONFIG).then((connection) => {
  const app: Express = express();

  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  app.set("userRepository", connection.getRepository(User));

  app.use("/auth", AuthRouter(app));

  app.listen(PORT, () => {
    console.log(`Connected to ${PORT}`);
  });
});
