import { Injectable } from '@angular/core';

import { ILogin, ISignUp } from './auth.interface';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signIn({password, username}: ILogin) {
    Auth.signIn(username, password)
      .then(user => console.log(user))
      .catch(err => console.log(err));
  }

  signUp(params: ISignUp) {
    console.log('params', params)
    Auth.signUp(params)
      .then(data => console.log(data))
      .catch(err => console.log(err));

  }

  signOut() {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
}
