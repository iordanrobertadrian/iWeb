import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
interface Review {
  description: string;
  reviewedBy: string;
  imageURL: string;
}
interface OfferCard {
  title: string;
  description: string;
  imagePath: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  reviews: Observable<Review[]>
  onlineShopOffers: OfferCard[] = [
    {
      title: 'DESGIN WEB RESPONSIVE',
      description: 'Compatibilitate cu dispozitivele mobile',
      imagePath: '../../../assets/flat-icons/responsive-website.svg'
    },
    {
      title: 'PANOU DE ADMINISTRARE',
      description: 'Poti adauga usor produse sau administra comenzile',
      imagePath: '../../../assets/flat-icons/admin.svg'
    },
    {
      title: 'PRODUSE SI CATEGORII',
      description: 'Organizare produse pe categorii si subcategorii',
      imagePath: '../../../assets/flat-icons/products.svg'
    },
    {
      title: 'PRODUSE VARIABILE',
      description: 'Caracteristici diferite: marime, culoare, dimensiuni',
      imagePath: '../../../assets/flat-icons/products2.svg'
    },
    {
      title: 'GALERIE FOTO/VIDEO',
      description: 'Integrate pe paginile de prezentare ale produselor',
      imagePath: '../../../assets/flat-icons/slideshow.svg'
    },
    {
      title: 'STOCURI',
      description: 'Administrarea stocurilor, modificarea lor in timp real',
      imagePath: '../../../assets/flat-icons/stock.svg'
    },
    {
      title: 'COS CUMPARATURI',
      description: 'Procesare comenzi in mod automat,direct pe site',
      imagePath: '../../../assets/flat-icons/shopping-cart.svg'
    },
    {
      title: 'LIVRARE',
      description: 'Variante de calcul costuri livrare si urmarire expediere',
      imagePath: '../../../assets/flat-icons/shipping.svg'
    },
    {
      title: 'PLATA ONLINE',
      description: 'Accepta plata cu cardul',
      imagePath: '../../../assets/flat-icons/online-payment.svg'
    },
    {
      title: 'DISCOUNT',
      description: 'Ofera reduceri clientilor fideli prin vouchere si coduri cupon',
      imagePath: '../../../assets/flat-icons/discount.svg'
    },
    {
      title: 'FACTURARE',
      description: 'Administrare comenzi si facturi direct din site',
      imagePath: '../../../assets/flat-icons/billing.svg'
    },
    {
      title: 'SLIDESHOW',
      description: 'Prezentarea produselor pe prima pagina a site-ului',
      imagePath: '../../../assets/flat-icons/slideshow.svg'
    },
    {
      title: 'OPTIMIZARE SEO',
      description: 'De la structura site-ului la setarea meta tag-urilor',
      imagePath: '../../../assets/flat-icons/seo.svg'
    },
    {
      title: 'FORUMAR DE CONTACT',
      description: 'Protejat anti-SPAM prin Google reCaptcha',
      imagePath: '../../../assets/flat-icons/business-card.svg'
    },
    {
      title: 'CONFORMITATE GDPR',
      description: 'Pagini cu politici de confidentialitate a cookie-urilor',
      imagePath: '../../../assets/flat-icons/gdpr.svg'
    },
    {
      title: 'MULTILANGUAGE',
      description: 'Extensie site web in mai multe limbi',
      imagePath: '../../../assets/flat-icons/translate.svg'
    },
    {
      title: 'SISTEM DE REZERVARE',
      description: 'De la rezervare camere hotel la planificator agenda',
      imagePath: '../../../assets/flat-icons/reserved.svg'
    },
    {
      title: 'PORTOFOLIU',
      description: 'Sectiune cu proiecte realizate, albume foto sau video',
      imagePath: '../../../assets/flat-icons/resume.svg'
    },
    {
      title: 'DIVERSE',
      description: 'Alte functii particulare afacerii dvs. ce pot fi integrate in site',
      imagePath: '../../../assets/flat-icons/miscellaneous.svg'
    },
    {
      title: 'GARANTIE',
      description: '7 zile de garantie si remediere gratuita a erorilor',
      imagePath: '../../../assets/flat-icons/guarantee.svg'
    },
    {
      title: 'LOCALIZARE',
      description: 'Integrare module precum google maps etc.',
      imagePath: '../../../assets/flat-icons/place.svg'
    }
  ]
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.reviews = this.afs.collection<Review>('Reviews').valueChanges();
  }

}
