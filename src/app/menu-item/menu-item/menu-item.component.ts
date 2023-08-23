import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  @Input() name: string = ' '
  @Input() mosaic: boolean = false
  @Output() menuClick: EventEmitter<string> = new EventEmitter();

  constructor() {}

  onMenuClick(choice:string) {
    this.menuClick.emit(choice);
  }

}
 