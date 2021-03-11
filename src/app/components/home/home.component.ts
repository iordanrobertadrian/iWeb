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
      title: 'GALERIE FOTO/VIDEO',
      description: 'Integrate pe paginile de prezentare ale produselor',
      imagePath: '../../../assets/flat-icons/slideshow.svg'
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
  presentationWebsiteOffers: OfferCard[] = [
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
      title: 'GALERIE FOTO/VIDEO',
      description: 'Integrate pe paginile de prezentare ale produselor',
      imagePath: '../../../assets/flat-icons/slideshow.svg'
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
  extraServicesOffers: OfferCard[] = [
    {
      description: 'In functie de bugetul de care dispuneti, putem oferi mentenanta web lunară sau la cerere (când este nevoie). Aceasta presupune actualizari ale platformei CMS, verificari ale logurilor de erori si securitate si remedierea problemelor întalnite, realizarea de backup-uri sau alte activitati ce tin de administrarea site-ului web',
      title: 'ADMINISTRARE SI MENTENANTA',
      imagePath: '../../../assets/flat-icons/mentenance.svg'
    },
    {
      description: 'Fie ca este vorba de "link building" personalizat sau campanii de publicitate prin Google Adwords sau Facebook Ads, Dream Webdesign se poate ocupa de configurarile necesare ca rezultatele obtinute în urma promovarii să aiba un impact maxim',
      title: 'CAMPANII DE PROMOVARE ONLINE',
      imagePath: '../../../assets/flat-icons/online-promotion.svg'
    }
  ]
  projectSteps: ProjectSteps[] = [
    {
      index: '1',
      description: 'Primul pas în realizarea unui site web il reprezintă colectarea datelor și informasiilor necesare, evaluarea volumului de muncă pe care il implica, precum si a costurilor ce rezulta din acesta. Acum este creionata structura viitorului site si sunt transmise (de beneficiar catre iWeb) toate materialele necesare, de la texte si imagini la videoclipuri sau alte materiale ce se doresc a fi integrate în viitorul site web.',
      title: 'Colectarea informatiilor despre viitorul site web:'
    },
    {
      index: '2',
      description: 'Pe baza informatiilor furnizate, designerii nostri se vor ocupa de realizarea unei prime variante a site-ului web. Aceasta va reflecta propria viziune, și reprezinta un model pentru beneficiar. Acolo unde lipsesc informatii, vor fi folosite unele implicite, iar în cazul imaginilor vom folosi unele potrivite, licentiate pentru uzul comun, pe care le achizitionam online.Primul pas în realizarea unui site web il reprezinta colectarea datelor si informasiilor necesare, evaluarea volumului de muncă pe care il implica, precum si a costurilor ce rezulta din acesta. Acum este creionata structura viitorului site si sunt transmise (de beneficiar catre iWeb) toate materialele necesare, de la texte si imagini la videoclipuri sau alte materiale ce se doresc a fi integrate în viitorul site web.',
      title: 'Realizarea primei variante a site-ului web:'
    },
    {
      index: '3',
      description: 'Puteti veni cu oricate revizuiri doriti asupra site-ului, asa încat la final acesta sa arate exact cum ati dorit. Aceste revizuiri nu presupun schimbarea termenilor contractuali, adaugarea de noi functii sau capabilitati site-ului, ci se refera strict la modificările de grafica, structura si continut.',
      title: 'Revizuirea site-ului web:'
    },
    {
      index: '4',
      description: 'Site-ul web realizat este testat, sunt remediate erorile descoperite si sunt implementate ultimele retușuri solicitate de catre beneficiar. De asemenea, site-ul web este transferat pe domeniul principal, dacă acesta a fost dezvoltat pe un subdomeniu sau pe un alt server si este lansat publicului.',
      title: 'Finalizarea si lansarea site-ului web:'
    }
  ]
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.reviews = this.afs.collection<Review>('Reviews').valueChanges();
  }

}
