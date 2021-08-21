import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/shared/canonical.service';
interface OfferCard {
  title: string;
  description: string;
  imagePath: string;
}
@Component({
  selector: 'app-online-shop',
  templateUrl: './online-shop.component.html',
  styleUrls: ['./online-shop.component.scss'],
})
export class OnlineShopComponent implements OnInit {
  title =
    'Magazin Online | Creare Magazin Online | Creare Site Prezentare | iWeb-Solution';
  onlineShopOffers: OfferCard[] = [
    {
      title: 'STOCURI',
      description: 'Administrarea si modificarea in timp real a stocurilor.',
      imagePath: '../../../assets/flat-icons/stock-logo-iweb-solution-creare-magazin-online-creare-site-web-prezentare.svg',
    },
    {
      title: 'COS CUMPARATURI',
      description: 'Procesarea comenzilor automat direct pe site.',
      imagePath: '../../../assets/flat-icons/shopping-cart-logo-iweb-solution-creare-magazin-online-creare-site-web-prezentare.svg',
    },
    {
      title: 'LIVRARE',
      description:
        'Variante de calcul a costurilor de livrare, urmarire expediere.',
      imagePath: '../../../assets/flat-icons/shipping-logo-iweb-solution-creare-magazin-online-creare-site-web-prezentare.svg',
    },
    {
      title: 'PLATA ONLINE',
      description: 'Integrare modul pentru plata cu cardul online.',
      imagePath: '../../../assets/flat-icons/online-payment-logo-iweb-solution-creare-magazin-online-creare-site-web-prezentare.svg',
    },
    {
      title: 'DISCOUNT',
      description:
        'Ofera discount clientilor tai fideli prin vouchere si coduri cupon.',
      imagePath: '../../../assets/flat-icons/discount-logo-iweb-solution-creare-magazin-online-creare-site-web-prezentare.svg',
    },
    {
      title: 'FACTURARE',
      description:
        'Administrarea comenzilor si facturilor direct din panoul de administrator.',
      imagePath: '../../../assets/flat-icons/billing-logo-iweb-solution-creare-magazin-online-creare-site-web-prezentare.svg',
    },
    {
      title: 'PRODUSE SI CATEGORII',
      description: 'Organizarea produselor pe categorii si subcategorii.',
      imagePath: '../../../assets/flat-icons/products-logo-iweb-solution-creare-magazin-online-creare-site-web-prezentare.svg',
    },
    {
      title: 'PRODUSE VARIABILE',
      description:
        'Caracteristici diferite ale produselor : marime, culoare, dimensiuni.',
      imagePath: '../../../assets/flat-icons/products2-logo-iweb-solution-creare-magazin-online-creare-site-web-prezentare.svg',
    },
    {
      title: 'DESGIN WEB RESPONSIVE',
      description: 'Compatibilitate cu orice tip de dispozitiv.',
      imagePath: '../../../assets/flat-icons/responsive-website-logo-iweb-solution-creare-magazin-online-creare-site-web-prezentare.svg',
    },
    {
      title: 'PANOU DE ADMINISTRARE',
      description:
        'Poti vizualiza, modifica si adauga orice tine de site-ul tau, cum ar fii produsele, comenzile, etc.',
      imagePath: '../../../assets/flat-icons/admin-logo-iweb-solution-creare-magazin-online-creare-site-web-prezentare.svg',
    },
    {
      title: 'GALERIE FOTO/VIDEO',
      description:
        'Integrare galerie foto/video pe orice pagina a magazinului tau.',
      imagePath: '../../../assets/flat-icons/gallery-logo-iweb-solution-creare-magazin-online-creare-site-web-prezentare.svg',
    },
    {
      title: 'SLIDESHOW',
      description: 'Prezentarea produselor pe prima pagina a magazinului tau.',
      imagePath: '../../../assets/flat-icons/slideshow-logo-iweb-solution-creare-magazin-online-creare-site-web-prezentare.svg',
    },
    {
      title: 'OPTIMIZARE SEO',
      description:
        'De la structura site-ului la setarea meta tag-urilor pe fiecare pagina a magazinului tau.',
      imagePath: '../../../assets/flat-icons/seo-logo-iweb-solution-creare-magazin-online-creare-site-web-prezentare.svg',
    },
    {
      title: 'FORUMAR DE CONTACT',
      description:
        'Lasati clientii sa comunice cu tine intr-un mod rapid si eficient.',
      imagePath: '../../../assets/flat-icons/business-card-logo-iweb-solution-creare-magazin-online-creare-site-web-prezentare.svg',
    },
    {
      title: 'CONFORMITATE GDPR',
      description: 'Pagini cu politici de confidentialitate a cookie-urilor.',
      imagePath: '../../../assets/flat-icons/gdpr-logo-iweb-solution-creare-magazin-online-creare-site-web-prezentare.svg',
    },
    {
      title: 'MULTILANGUAGE',
      description:
        'Extensie pentru ca magazinul dumneavoastra sa fie translatat in mai multe limbi.',
      imagePath: '../../../assets/flat-icons/translate-logo-iweb-solution-creare-magazin-online-creare-site-web-prezentare.svg',
    },
    {
      title: 'SISTEM DE REZERVARE',
      description: 'Rezerva de la camere de hotel pana la planificare agenda.',
      imagePath: '../../../assets/flat-icons/reserved-logo-iweb-solution-creare-magazin-online-creare-site-web-prezentare.svg',
    },
    {
      title: 'PORTOFOLIU',
      description: 'Sectiune cu proiecte realizate, slidere foto sau video.',
      imagePath: '../../../assets/flat-icons/resume-logo-iweb-solution-creare-magazin-online-creare-site-web-prezentare.svg',
    },
    {
      title: 'DIVERSE',
      description:
        'Alte plugin-uri care sunt necesare magazinului dumneavoastra.',
      imagePath: '../../../assets/flat-icons/miscellaneous-logo-iweb-solution-creare-magazin-online-creare-site-web-prezentare.svg',
    },
    {
      title: 'GARANTIE',
      description:
        'Oferim 7 zile de garantie si remediere gratuita a erorilor.',
      imagePath: '../../../assets/flat-icons/guarantee-logo-iweb-solution-creare-magazin-online-creare-site-web-prezentare.svg',
    },
    {
      title: 'LOCALIZARE',
      description: 'Integrare Google Maps',
      imagePath: '../../../assets/flat-icons/place-logo-iweb-solution-creare-magazin-online-creare-site-web-prezentare.svg',
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
          'Crearea de magazine online si site-uri web pentru prezentarea afacerii dumneavoastra.',
      },
      { charset: 'UTF-8' },
    ]);
    this.titleService.setTitle(this.title);
    this.canonicalService.setCanonicalURL();
  }
}
