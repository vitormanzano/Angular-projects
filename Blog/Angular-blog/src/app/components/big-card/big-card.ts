import { Component, inject, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterLink],
  templateUrl: './big-card.html',
  styleUrl: './big-card.css'
})
export class BigCard implements OnInit {
  private sanitizer = inject(DomSanitizer);

  @Input()
  Id: string = "";

  @Input()
  photoCover: string = "";
  @Input()
  cardTitle: string = "";
  @Input()
  cardDescription: string = "";

  constructor() {
    this.photoCover = this.sanitizer.bypassSecurityTrustUrl(this.photoCover) as string;
  }

  ngOnInit() {
    // Initialization logic can go here
  }


}
