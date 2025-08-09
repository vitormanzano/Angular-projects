import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuTitle } from './components/menu-title/menu-title';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-blog');
}
