import { Request, Response } from 'express';
import User from '../database/models/user';
import { IUserServices } from '../services/interfaces/IUserServices';

export default class UserController {
  constructor(private userServices: IUserServices<User>) { }

  async Autenticate(req: Request, res: Response): Promise<void> {
    const token = await this.userServices.Autenticate(req.body);
    res.status(200).json({ token });
  }
}
