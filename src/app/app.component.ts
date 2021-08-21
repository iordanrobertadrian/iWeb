import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from './shared/canonical.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title =
    'Acasa | Creare Magazin Online | Creare Site Prezentare | iWeb-Solution';
  constructor(
    private metaTagService: Meta,
    private titleService: Title,
    private canonicalService: CanonicalService
  ) {}

  ngOnInit() {
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content:
          'Creare site,Creare magazin online,Creare site web,Creare site web prezentare,Creare site prezentare,Site,Site web',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'iWeb-Solution' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2018-08-01', scheme: 'YYYY-MM-DD' },
      {
        name: 'description',
        content:
          'Servicii profesionale in ceea ce priveste crearea de magazine online si site-uri web pentru prezentarea afacerii dumneavoastra.',
      },
      { charset: 'UTF-8' },
    ]);
    this.titleService.setTitle(this.title);
    this.canonicalService.setCanonicalURL();
  }
}
