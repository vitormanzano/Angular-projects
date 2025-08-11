import { Component } from '@angular/core';
import { MenuTitle } from '../../components/menu-title/menu-title';
import { BigCard } from '../../components/big-card/big-card';
import { SmallCard } from '../../components/small-card/small-card';
import { MenuBar } from '../../components/menu-bar/menu-bar';

@Component({
  selector: 'app-home',
  imports: [MenuTitle, BigCard, SmallCard, MenuBar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
