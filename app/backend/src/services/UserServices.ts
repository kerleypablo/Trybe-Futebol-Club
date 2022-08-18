import Users from 'src/database/models/user';
import TokenServices from 'src/Utils/TokenServices';
import { IUserCredentials } from 'src/Interfaces/IUser';
import IUserServices from './interfaces/IUserServices';
import User from '../database/models/user';

export default class UserServices implements IUserServices<Users> {
  private tokenServices = new TokenServices();

  public async Autenticate(login: IUserCredentials) {
    const user = await User.findOne({
      where: { email: login.email, password: login.password },
    });
    if (!user) {
      return '';
    }
    const token = this.tokenServices.tokenGenerate(user);

    return token;
  }
}
