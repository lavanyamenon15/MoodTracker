import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  listItems: string[] = ["Document My Day", "Alter My Mood", "My Mosaic"]

  menuClicked(choice:string) {
    
    console.log(choice)
  }

}
