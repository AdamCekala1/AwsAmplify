import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { API } from 'aws-amplify';
import { AmplifyService }  from 'aws-amplify-angular';

import { AuthService } from '../auth.service';
import Auth from 'aws-amplify/lib/Auth';

declare var gapi:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private aService: AmplifyService,
              private authService: AuthService) { }

  submit() {
    this.authService.signIn(this.form.value);
  }

  testapi() {
    console.log(this.aService.api())
    const ga = gapi.auth2.getAuthInstance();

    console.log('ga', ga)

    ga.signIn().then(googleUser => {
      const { id_token, expires_at } = googleUser.getAuthResponse();
      const profile = googleUser.getBasicProfile();
      const user = {
        email: profile.getEmail(),
        name: profile.getName()
      };

      return Auth.federatedSignIn(
        // Initiate federated sign-in with Google identity provider
        'google',
        {
          // the JWT token
          token: id_token,
          // the expiration time
          expires_at
        },
        // a user object
        user
      ).then(() => {
        this.test();
        console.log('log IN')
      }).catch(() => {
        console.log('log IN nopee')
      });
    });
  }

  test() {
    API.get('testoweAPI', '/products', {})
      .then(data => console.log('products: ', data))
      .catch(err => console.log(err));
    API.get('testoweAPI', '/products/123', {})
      .then(data => console.log('products/123: ', data))
      .catch(err => console.log(err));
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = this.formBuilder.group({     // {5}
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
