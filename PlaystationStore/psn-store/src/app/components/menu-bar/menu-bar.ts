import { Component } from '@angular/core';
import { MenuBarItem } from "./menu-bar-item/menu-bar-item";

@Component({
  selector: 'app-menu-bar',
  imports: [MenuBarItem, MenuBarItem],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.css'
})
export class MenuBar {

}
