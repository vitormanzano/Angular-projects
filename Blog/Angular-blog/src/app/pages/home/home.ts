import { Component } from '@angular/core';
import { MenuTitle } from '../../components/menu-title/menu-title';
import { BigCard } from '../../components/big-card/big-card';

@Component({
  selector: 'app-home',
  imports: [MenuTitle, BigCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
