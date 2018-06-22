export interface ISignUp extends ILogin {
  attributes: {
    email: string;
  };
}

export interface ILogin {
  username: string;
  password: string;
}
