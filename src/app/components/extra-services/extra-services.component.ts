import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/shared/canonical.service';
interface OfferCard {
  title: string;
  description: string;
  imagePath: string;
}
@Component({
  selector: 'app-extra-services',
  templateUrl: './extra-services.component.html',
  styleUrls: ['./extra-services.component.scss'],
})
export class ExtraServicesComponent implements OnInit {
  title =
    'Servicii Extra | Creare Magazin Online | Creare Site Prezentare | iWeb-Solution';
  extraServicesOffers: OfferCard[] = [
    {
      description:
        'Va punem la dispozitie in functie de bugetul dumneavoastra administrarea site-ului si mentenanta acestuia care poate fi lunara sau "urgenta"(presupune interventia noastra rapida / problema).',
      title: 'ADMINISTRARE SI MENTENANTA',
      imagePath: '../../../assets/flat-icons/mentenance-logo-iweb-solution-creare-magazin-online-creare-site-web-prezentare.svg',
    },
    {
      description:
        'Oferim campanii de publicitate Google AdWords si Facebook Axds, iWeb se poate ocupa de configurarile necesare ca rezultatele obtinute în urma promovarii să aiba un impact maxim',
      title: 'CAMPANII DE PROMOVARE ONLINE',
      imagePath: '../../../assets/flat-icons/online-promotion-logo-iweb-solution-creare-magazin-online-creare-site-web-prezentare.svg',
    },
  ];
  constructor(
    private metaTagService: Meta,
    private titleService: Title,
    private canonicalService: CanonicalService
  ) {}

  ngOnInit(): void {
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
          'Servicii extra in ceea ce priveste crearea de magazine online si site-uri web pentru prezentarea afacerii dumneavoastra.',
      },
      { charset: 'UTF-8' },
    ]);
    this.titleService.setTitle(this.title);
    this.canonicalService.setCanonicalURL();
  }
}
