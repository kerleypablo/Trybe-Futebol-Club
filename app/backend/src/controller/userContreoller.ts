import { Request, Response } from 'express';
import UserServices from '../services/UserServices';
import User from '../database/models/user';
import { IUserServices } from '../services/interfaces/IUserServices';

export default class UserController {
  constructor(private userServices: IUserServices<User>) { }
  Autenticate = async (req: Request, res: Response) => {
    try {
      const login = await UserServices.Autenticate(req.body);
      if (!login) return res.status(401).json({ message: 'Incorrect email or password' });
      const token = await this.userServices.generateToken(req.body);
      console.log(token);
      return res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  };
}
