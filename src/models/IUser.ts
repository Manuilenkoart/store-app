export interface IUserResponse {
  user: IUser;
	token: string;
}

export interface IUser {
  username: string;
  email: string;
  roles: string[];
}

export interface IUserLogin {
  email: string;
  password: string;
}
