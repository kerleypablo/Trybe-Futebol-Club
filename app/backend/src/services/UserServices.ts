import TokenServices from '../Utils/TokenServices';
import { IUserCredentials } from '../Interfaces/IUser';
import { IUserServices } from './interfaces/IUserServices';
import User from '../database/models/user';
import ErrorMiddleware from '../middlewares/erroMiddleware';

export default class UserServices implements IUserServices<User> {
  private tokenServices = new TokenServices();

  public async Autenticate(login: IUserCredentials): Promise<string> {
    const user = await User.findOne({
      where: { email: login.email, password: login.password },
    });
    if (!user) {
      throw new ErrorMiddleware(401, 'username or password is invalid');
    }
    const token = this.tokenServices.tokenGenerate(user);

    return token;
  }
}
