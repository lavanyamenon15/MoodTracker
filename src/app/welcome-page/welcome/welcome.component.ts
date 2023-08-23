import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  loggedIn = false; 
  name = "";

  constructor() {}

  Login(userName: string){
    this.name = userName;
    this.loggedIn = true;
  }

}
