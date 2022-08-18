export interface IUserCredentials {
  email: string;
  password: string;
}

export interface Iuser extends IUserCredentials {
  username: string;
}

export interface UserDTO extends Iuser {
  id: number;
}
