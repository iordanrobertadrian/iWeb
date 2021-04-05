import { Component, OnInit } from '@angular/core';
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
  extraServicesOffers: OfferCard[] = [
    {
      description:
        'Va punem la dispozitie in functie de bugetul dumneavoastra administrarea site-ului si mentenanta acestuia care poate fi lunara sau "urgenta"(presupune interventia noastra rapida / problema).',
      title: 'ADMINISTRARE SI MENTENANTA',
      imagePath: '../../../assets/flat-icons/mentenance.svg',
    },
    {
      description:
        'Oferim campanii de publicitate Google AdWords si Facebook Axds, iWeb se poate ocupa de configurarile necesare ca rezultatele obtinute în urma promovarii să aiba un impact maxim',
      title: 'CAMPANII DE PROMOVARE ONLINE',
      imagePath: '../../../assets/flat-icons/online-promotion.svg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
