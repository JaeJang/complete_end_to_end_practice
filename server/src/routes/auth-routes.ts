import { Router, Request, Response, Express } from "express";
import bcrypt from 'bcrypt';
import moment from 'moment';

import { UserRequest } from "./APIs";
import { HTTP_STATUS } from "../constants";
import { User } from "../entities/User";

export const AuthRouter = (app: Express): Router => {
  const router: Router = Router();
  const userRepository = app.get("DBManager").getUserRepository();

  router.get("/login", (req: UserRequest, res: Response) => {

  });

  router.post("signup", async (req: UserRequest, res: Response) => {
    const email = req.body.email;
    const existUser = userRepository.findByEmail(email);

    if (existUser) {
      return res.status(HTTP_STATUS.BAD_REQUEST).send();
    }

    const salt = await bcrypt.getSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser: User = new User();
    newUser.email = email;
    newUser.password = hashedPassword;
    newUser.salt = salt;
    newUser.updatedAt = new Date(moment.now());
    
    userRepository.save(newUser);
  })

  return router;
};
