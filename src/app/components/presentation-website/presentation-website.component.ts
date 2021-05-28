import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/shared/canonical.service';
interface OfferCard {
  title: string;
  description: string;
  imagePath: string;
}
@Component({
  selector: 'app-presentation-website',
  templateUrl: './presentation-website.component.html',
  styleUrls: ['./presentation-website.component.scss'],
})
export class PresentationWebsiteComponent implements OnInit {
  title =
    'Site Prezentare | Creare Magazin Online | Creare Site Prezentare | iWeb-Solution';
  presentationWebsiteOffers: OfferCard[] = [
    {
      title: 'DESGIN WEB RESPONSIVE',
      description: 'Compatibilitate cu orice tip de dispozitiv.',
      imagePath: '../../../assets/flat-icons/responsive-website.svg',
    },
    {
      title: 'PANOU DE ADMINISTRARE',
      description:
        'Poti vizualiza, modifica si adauga orice tine de site-ul tau.',
      imagePath: '../../../assets/flat-icons/admin.svg',
    },
    {
      title: 'GALERIE FOTO/VIDEO',
      description:
        'Integrare galerie foto/video pe orice pagina a site-ului tau de prezentare.',
      imagePath: '../../../assets/flat-icons/gallery.svg',
    },
    {
      title: 'SLIDESHOW',
      description:
        'Prezentarea produselor pe prima pagina a site-ului tau de prezentare.',
      imagePath: '../../../assets/flat-icons/slideshow.svg',
    },
    {
      title: 'OPTIMIZARE SEO',
      description:
        'De la structura site-ului la setarea meta tag-urilor pe fiecare pagina a site-ului tau de prezentare.',
      imagePath: '../../../assets/flat-icons/seo.svg',
    },
    {
      title: 'FORUMAR DE CONTACT',
      description:
        'Lasati clientii sa comunice cu tine intr-un mod rapid si eficient.',
      imagePath: '../../../assets/flat-icons/business-card.svg',
    },
    {
      title: 'CONFORMITATE GDPR',
      description: 'Pagini cu politici de confidentialitate a cookie-urilor.',
      imagePath: '../../../assets/flat-icons/gdpr.svg',
    },
    {
      title: 'MULTILANGUAGE',
      description:
        'Extensie pentru ca site-ului tau de prezentare sa fie translatat in mai multe limbi.',
      imagePath: '../../../assets/flat-icons/translate.svg',
    },
    {
      title: 'SISTEM DE REZERVARE',
      description: 'Rezerva de la camere de hotel pana la planificare agenda.',
      imagePath: '../../../assets/flat-icons/reserved.svg',
    },
    {
      title: 'PORTOFOLIU',
      description: 'Sectiune cu proiecte realizate, slidere foto sau video.',
      imagePath: '../../../assets/flat-icons/resume.svg',
    },
    {
      title: 'DIVERSE',
      description:
        'Alte plugin-uri care sunt necesare site-ului tau de prezentare.',
      imagePath: '../../../assets/flat-icons/miscellaneous.svg',
    },
    {
      title: 'GARANTIE',
      description:
        'Oferim 7 zile de garantie si remediere gratuita a erorilor.',
      imagePath: '../../../assets/flat-icons/guarantee.svg',
    },
    {
      title: 'LOCALIZARE',
      description: 'Integrare Google Maps',
      imagePath: '../../../assets/flat-icons/place.svg',
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
