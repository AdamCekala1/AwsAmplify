import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';

import Amplify from 'aws-amplify';
import awsmobile from '../aws-exports';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    Amplify.configure(awsmobile);
  }

  signIn({password, username}: ILogin) {
    Auth.signIn(username, password)
      .then(user => console.log(user))
      .catch(err => console.log(err));
  }

  signUp(params: ISignUp) {
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

export interface ISignUp extends ILogin {
  attributes: {
    email: string;
  };
}

export interface ILogin {
  username: string;
  password: string;
}
