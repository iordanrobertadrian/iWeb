import { Component, OnInit } from '@angular/core';
interface OfferCard {
  title: string;
  description: string;
  imagePath: string;
}
@Component({
  selector: 'app-online-shop',
  templateUrl: './online-shop.component.html',
  styleUrls: ['./online-shop.component.scss']
})
export class OnlineShopComponent implements OnInit {
  onlineShopOffers: OfferCard[] = [
    {
      title: 'STOCURI',
      description: 'Administrarea si modificarea in timp real a stocurilor.',
      imagePath: '../../../assets/flat-icons/stock.svg'
    },
    {
      title: 'COS CUMPARATURI',
      description: 'Procesarea comenzilor automat direct pe site.',
      imagePath: '../../../assets/flat-icons/shopping-cart.svg'
    },
    {
      title: 'LIVRARE',
      description: 'Variante de calcul a costurilor de livrare, urmarire expediere.',
      imagePath: '../../../assets/flat-icons/shipping.svg'
    },
    {
      title: 'PLATA ONLINE',
      description: 'Integrare modul pentru plata cu cardul online.',
      imagePath: '../../../assets/flat-icons/online-payment.svg'
    },
    {
      title: 'DISCOUNT',
      description: 'Ofera discount clientilor tai fideli prin vouchere si coduri cupon.',
      imagePath: '../../../assets/flat-icons/discount.svg'
    },
    {
      title: 'FACTURARE',
      description: 'Administrarea comenzilor si facturilor direct din panoul de administrator.',
      imagePath: '../../../assets/flat-icons/billing.svg'
    },
    {
      title: 'PRODUSE SI CATEGORII',
      description: 'Organizarea produselor pe categorii si subcategorii.',
      imagePath: '../../../assets/flat-icons/products.svg'
    },
    {
      title: 'PRODUSE VARIABILE',
      description: 'Caracteristici diferite ale produselor : marime, culoare, dimensiuni.',
      imagePath: '../../../assets/flat-icons/products2.svg'
    },
    {
      title: 'DESGIN WEB RESPONSIVE',
      description: 'Compatibilitate cu orice tip de dispozitiv.',
      imagePath: '../../../assets/flat-icons/responsive-website.svg'
    },
    {
      title: 'PANOU DE ADMINISTRARE',
      description: 'Poti vizualiza, modifica si adauga orice tine de site-ul tau, cum ar fii produsele, comenzile, etc.',
      imagePath: '../../../assets/flat-icons/admin.svg'
    },
    {
      title: 'GALERIE FOTO/VIDEO',
      description: 'Integrare galerie foto/video pe orice pagina a magazinului tau.',
      imagePath: '../../../assets/flat-icons/gallery.svg'
    },
    {
      title: 'SLIDESHOW',
      description: 'Prezentarea produselor pe prima pagina a magazinului tau.',
      imagePath: '../../../assets/flat-icons/slideshow.svg'
    },
    {
      title: 'OPTIMIZARE SEO',
      description: 'De la structura site-ului la setarea meta tag-urilor pe fiecare pagina a magazinului tau.',
      imagePath: '../../../assets/flat-icons/seo.svg'
    },
    {
      title: 'FORUMAR DE CONTACT',
      description: 'Lasati clientii sa comunice cu tine intr-un mod rapid si eficient.',
      imagePath: '../../../assets/flat-icons/business-card.svg'
    },
    {
      title: 'CONFORMITATE GDPR',
      description: 'Pagini cu politici de confidentialitate a cookie-urilor.',
      imagePath: '../../../assets/flat-icons/gdpr.svg'
    },
    {
      title: 'MULTILANGUAGE',
      description: 'Extensie pentru ca magazinul dumneavoastra sa fie translatat in mai multe limbi.',
      imagePath: '../../../assets/flat-icons/translate.svg'
    },
    {
      title: 'SISTEM DE REZERVARE',
      description: 'Rezerva de la camere de hotel pana la planificare agenda.',
      imagePath: '../../../assets/flat-icons/reserved.svg'
    },
    {
      title: 'PORTOFOLIU',
      description: 'Sectiune cu proiecte realizate, slidere foto sau video.',
      imagePath: '../../../assets/flat-icons/resume.svg'
    },
    {
      title: 'DIVERSE',
      description: 'Alte plugin-uri care sunt necesare magazinului dumneavoastra.',
      imagePath: '../../../assets/flat-icons/miscellaneous.svg'
    },
    {
      title: 'GARANTIE',
      description: 'Oferim 7 zile de garantie si remediere gratuita a erorilor.',
      imagePath: '../../../assets/flat-icons/guarantee.svg'
    },
    {
      title: 'LOCALIZARE',
      description: 'Integrare Google Maps',
      imagePath: '../../../assets/flat-icons/place.svg'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
