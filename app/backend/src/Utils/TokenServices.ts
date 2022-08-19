import * as jwt from 'jsonwebtoken';
import { IUserCredentials } from '../Interfaces/IUser';

const { JWT_SECRET } = process.env;

const config : jwt.SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

export default class TokenServices {
  private jwt = jwt;

  constructor(private jwtconfig?: jwt.SignOptions) {
    if (!jwtconfig) {
      this.jwtconfig = config;
    }
  }

  public async tokenGenerate(payload: IUserCredentials) {
    return this.jwt.sign(payload, JWT_SECRET as string, this.jwtconfig);
  }
}
