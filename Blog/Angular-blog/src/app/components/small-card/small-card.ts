import { Component, inject, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-small-card',
  imports: [],
  templateUrl: './small-card.html',
  styleUrl: './small-card.css'
})
export class SmallCard implements OnInit {
  private sanitizer = inject(DomSanitizer);

  @Input()
  photoCover: string = "";
  @Input()
  cardTitle: string = "";

  constructor() {
    this.photoCover = this.sanitizer.bypassSecurityTrustUrl(this.photoCover) as string;
  }

  ngOnInit() {
  }
}
