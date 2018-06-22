import { Component } from '@angular/core';
import Amplify from 'aws-amplify';

import awsmobile from '../aws-exports.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    Amplify.configure(awsmobile);
  }
}
