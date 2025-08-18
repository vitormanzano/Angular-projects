import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBar } from "./components/menu-bar/menu-bar";
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBar, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('psn-store');
}
