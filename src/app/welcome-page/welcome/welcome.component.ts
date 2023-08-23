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
    // TODO: register name with database to create a new set of data 
    //       or search for name in database and retrieve data 
  }

}
