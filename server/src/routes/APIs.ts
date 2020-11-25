import { Request } from 'express';

export interface UserRequest extends Request {
  body: {
    email: string,
    password: string
  }
}