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
interface ProjectSteps {
  index: string;
  title: string;
  description: string;
}
export interface Project {
  title: string;
  linkURL?: string;
  imagePath: string;
  description?: string;
  badge?: string;
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
  presentationWebsiteOffers: OfferCard[] = [
    {
      title: 'DESGIN WEB RESPONSIVE',
      description: 'Compatibilitate cu orice tip de dispozitiv.',
      imagePath: '../../../assets/flat-icons/responsive-website.svg'
    },
    {
      title: 'PANOU DE ADMINISTRARE',
      description: 'Poti vizualiza, modifica si adauga orice tine de site-ul tau.',
      imagePath: '../../../assets/flat-icons/admin.svg'
    },
    {
      title: 'GALERIE FOTO/VIDEO',
      description: 'Integrare galerie foto/video pe orice pagina a site-ului tau de prezentare.',
      imagePath: '../../../assets/flat-icons/gallery.svg'
    },
    {
      title: 'SLIDESHOW',
      description: 'Prezentarea produselor pe prima pagina a site-ului tau de prezentare.',
      imagePath: '../../../assets/flat-icons/slideshow.svg'
    },
    {
      title: 'OPTIMIZARE SEO',
      description: 'De la structura site-ului la setarea meta tag-urilor pe fiecare pagina a site-ului tau de prezentare.',
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
      description: 'Extensie pentru ca site-ului tau de prezentare sa fie translatat in mai multe limbi.',
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
      description: 'Alte plugin-uri care sunt necesare site-ului tau de prezentare.',
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
  extraServicesOffers: OfferCard[] = [
    {
      description: 'Va punem la dispozitie in functie de bugetul dumneavoastra administrarea site-ului si mentenanta acestuia care poate fi lunara sau "urgenta"(presupune interventia noastra rapida / problema).',
      title: 'ADMINISTRARE SI MENTENANTA',
      imagePath: '../../../assets/flat-icons/mentenance.svg'
    },
    {
      description: 'Oferim campanii de publicitate Google AdWords si Facebook Axds, iWeb se poate ocupa de configurarile necesare ca rezultatele obtinute în urma promovarii să aiba un impact maxim',
      title: 'CAMPANII DE PROMOVARE ONLINE',
      imagePath: '../../../assets/flat-icons/online-promotion.svg'
    }
  ]
  projectSteps: ProjectSteps[] = [
    {
      index: '1',
      description: 'Primul pas in realizarea site-ului web il reprezinta colectarea datelor si a informatiilor necesare, evaluarea volumului de munca pe care il implica dezvoltarea site-ului, precum si a costurilor rezultate din acesta. Necesita transmiterea materialelor necesare, de la texte si imagini la videoclipuri sau alte materiale ce se doresc a fi integrate in site-ul dumneavoastra.',
      title: 'Colectarea informatiilor privind viitorul site web:'
    },
    {
      index: '2',
      description: 'Pe baza informatiilor furnizate, designerii nostri se vor ocupa de realizarea unei prime variante de mock-up a site-ului web. In functie de acest mock-up vom putea merge mai departe la pasul 3.',
      title: 'Realizarea primului mock-up a site-ului web:'
    },
    {
      index: '3',
      description: 'Acest pas reprezinta implementarea tuturor informatiilor transmise de catre beneficiar, texte, poze, plugin-uri, astfel incat site-ul sa fie compatibil pe orice tip de dispozitiv, sa respecte toate informatiile si indicatiile beneficiarului si sa fie functional din toate punctele de vedere.',
      title: 'Implementarea site-ului web:'
    },
    {
      index: '4',
      description: 'Ultimul pas este cel mai important si anume, site-ul web realizat este testat, sunt remediate erorile descoperite si sunt implementate ultimele retusuri solicitate de catre beneficiar. De asemenea, site-ul web este transferat pe domeniul principal, daca acesta a fost dezvoltat pe un subdomeniu sau pe un alt server si este lansat publicului.',
      title: 'Finalizarea, testarea si lansarea site-ului web:'
    }
  ]
  projects: Project[] = [
    {
      title: 'ONIX SHOP',
      imagePath: '../../../assets/projects/onix-shop.svg',
      linkURL: 'https://www.onix-shop.ro'
    },
    {
      title: 'AMY VILLAGE',
      imagePath: '../../../assets/projects/amy-village.svg',
      linkURL: 'https://www.amy--village.ro'
    },
    {
      title: 'BEST MOMENTS',
      imagePath: '../../../assets/projects/best-moments.svg',
      linkURL: 'https://www.bestmoments-shop.com'
    },
    {
      title: 'YURI SHOP',
      imagePath: '../../../assets/projects/yuri-shop.svg',
      linkURL: 'https://www.yurishop.ro'
    },
    {
      title: 'ONLINE GAME SHOP',
      imagePath: '../../../assets/projects/online-shop.svg',
      linkURL: 'https://onlinegameshop-1603f.web.app'
    }
  ]
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.reviews = this.afs.collection<Review>('Reviews').valueChanges();
  }
}
