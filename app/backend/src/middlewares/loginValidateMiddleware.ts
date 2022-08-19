import { NextFunction, Request, Response } from 'express';
import loginSchema from '../schema/LoginValidateSchema';

export default class ValidateLogin {
  static login(req: Request, res: Response, next: NextFunction) {
    const { error } = loginSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    next();
  }
}
