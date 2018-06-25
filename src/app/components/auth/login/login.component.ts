import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { API } from 'aws-amplify';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) { }

  submit() {
    this.authService.signIn(this.form.value);
  }

  testapi() {
    // API.post('AwsLearningAPI', '/products', {name: 'kabel'}).subscribe((x) => {
    //   console.log('x', x);
    // });

    // async function getData() {
    //   let apiName = 'testAPI';
    //   let path = '/items';
    //   let myInit = { // OPTIONAL
    //     headers: {} // OPTIONAL
    //   }
    //   return await API.get(apiName, path, myInit).then(data => console.log(data)).catch(err => console.log(err));
    // }
    //
    // getData();

    API.get('testAPI', '/items', {})
      .then(data => console.log(data))
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
