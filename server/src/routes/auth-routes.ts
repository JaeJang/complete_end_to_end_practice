import { Router, Request, Response, Express } from "express";
import bcrypt from "bcrypt";
import moment from "moment";

import { UserRequest } from "./APIs";
import { HTTP_STATUS } from "../constants";
import User from "../entities/User";
import DBManager from "../database/DatabaseManager";
import { Repository } from "typeorm";

export const AuthRouter = (app: Express): Router => {
  const router: Router = Router();
  const userRepository: Repository<User> = app.get("userRepository");

  router.post("/login", (req: UserRequest, res: Response) => {});

  router.post("/signup", async (req: UserRequest, res: Response) => {
    const email = req.body.email;
    const existingUser = await userRepository.findOne({ email: email });

    if (existingUser) {
      return res.status(HTTP_STATUS.CONFLIT).send({ error: "This email is already registered" });
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser: User = new User();
    newUser.email = email;
    newUser.password = hashedPassword;
    newUser.salt = salt;

    try {
      await userRepository.save(newUser);
    } catch (e) {
      console.error(e);
      return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send({ error: e.message });
    }
    return res.status(HTTP_STATUS.CREATED).send();
  });

  return router;
};
