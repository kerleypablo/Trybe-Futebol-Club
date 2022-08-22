import { NextFunction, Request, Response } from 'express';
import loginSchema from '../schema/LoginValidateSchema';
import TokenServices from '../Utils/TokenServices';

export default class ValidateLogin {
  private tokenServices = new TokenServices();
  static login(req: Request, res: Response, next: NextFunction) {
    const { error } = loginSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    next();
  }

  public verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) return res.status(400).json({ message: 'No token was found' });
    const result = await this.tokenServices.tokenAutenticate(token as string);
    console.log(result);
    if (!result || null) {
      return res.status(400).json({ message: 'Token nao autorizado' });
    }
    return next();
  };
}
