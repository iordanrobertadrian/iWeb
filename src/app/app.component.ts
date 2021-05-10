import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from './shared/canonical.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'iWeb Solution';
  constructor(
    private metaTagService: Meta,
    private titleService: Title,
    private canonicalService: CanonicalService
    ) {}

  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Creare site, Creare magazin online, Creare site web, Creare site web prezentare, Creare site prezentare, Site, Site web' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'iWeb Solution' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2018-08-01', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      { name: 'description', content: 'Compania iWeb ofera servicii profesionale in domeniul IT, cum ar fi dezvoltarea web, concept unic in ceea ce priveste design-ul web (UX / UI), crearea de logo-uri, site-uri pentru prezentare, magazine online si nu in ultimul rand ne ocupam de tot ce tine de partea de SEO.' }
    );
    this.canonicalService.setCanonicalURL();
  }
}
