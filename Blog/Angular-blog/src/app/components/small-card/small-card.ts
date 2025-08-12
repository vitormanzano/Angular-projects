import { Component, inject, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [RouterLink],
  templateUrl: './small-card.html',
  styleUrl: './small-card.css'
})
export class SmallCard implements OnInit {
  private sanitizer = inject(DomSanitizer);

  @Input()
  Id: string = "";
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
