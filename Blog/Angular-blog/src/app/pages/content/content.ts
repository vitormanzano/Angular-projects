import { Component, inject, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  imports: [RouterModule],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content implements OnInit {
  private sanitizer = inject(DomSanitizer);

  @Input()
  private id: string | null = "0";

  @Input()
  photoCover: string = "";

  @Input()
  contentTitle: string = "";

  @Input()
  contentDescription: string = "";

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
      this.route.paramMap.subscribe(value => {
        this.id = value.get('id')
      });

      this.setValueToContent(this.id);
  }

  setValueToContent(id: string | null) {
    const result = dataFake.filter(article => article.id === id)[0];

    this.photoCover = this.sanitizer.bypassSecurityTrustUrl(result.photo) as string;
    this.contentTitle = result.title;
    this.contentDescription = result.description;
      
  }
  
}
