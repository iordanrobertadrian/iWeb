import { Component, OnInit } from '@angular/core';
export interface Service {
  value: number;
  viewValue: string;
}
export interface Page {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {
  price: number = 0;
  serviceSelectedValue: number;
  pageNumbersSiteWebPrezentareSelectedValue: number;
  pageNumbersMagazinOnlineSelectedValue: number;

  logoSiteWebPrezentare: boolean = false;
  bannerSiteWebPrezentare: boolean = false;
  gdprSiteWebPrezentare: boolean = false;
  responsiveDesignSiteWebPrezentare: boolean = false;
  adminPanelSiteWebPrezentare: boolean = false;
  fotoVideoSiteWebPrezentare: boolean = false;
  slideshowSiteWebPrezentare: boolean = false;
  seoSiteWebPrezentare: boolean = false;
  contactFormSiteWebPrezentare: boolean = false;
  multilanguageSiteWebPrezentare: boolean = false;
  portofolioSiteWebPrezentare: boolean = false;
  reservationSistemSiteWebPrezentare: boolean = false;
  localizeSiteWebPrezentare: boolean = false;

  stocksMagazinOnline: boolean = false;
  shoppingCartMagazinOnline: boolean = false;
  shippingMagazinOnline: boolean = false;
  onlinePaymentMagazinOnline: boolean = false;
  discountMagazinOnline: boolean = false;
  invoiceMagazinOnline: boolean = false;
  productsAndCategoriesMagazinOnline: boolean = false;
  productsVariables: boolean = false;
  responsiveDesignMagazinOnline: boolean = false;
  adminPanelMagazinOnline: boolean = false;
  fotoVideoMagazinOnline: boolean = false;
  slideshowMagazinOnline: boolean = false;
  seoMagazinOnline: boolean = false;
  contactFormMagazinOnline: boolean = false;
  gdprMagazinOnline: boolean = false;
  multilanguageMagazinOnline: boolean = false;
  reservationSistemMagazinOnline: boolean = false;
  portofolioMagazinOnline: boolean = false;
  localizeMagazinOnline: boolean = false;
  logoMagazinOnline: boolean = false;
  bannerMagazinOnline: boolean = false;

  services: Service[] = [
    { value: 1, viewValue: 'Site Web Prezentare' },
    { value: 2, viewValue: 'Magazin Online' },
  ];
  pageNumbersSiteWebPrezentare: Page[] = [
    { value: 1, viewValue: '3' },
    { value: 2, viewValue: '3+' }
  ]
  pageNumbersMagazinOnline: Page[] = [
    { value: 1, viewValue: '4' },
    { value: 2, viewValue: '4+' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  calculateSiteWebPrezentarePrice() {
    let defaultPrice = 149;
    if(this.logoSiteWebPrezentare) {
      defaultPrice += 50;
    }
    if(this.bannerSiteWebPrezentare) {
      defaultPrice += 50;
    }
    if(this.gdprSiteWebPrezentare) {
      defaultPrice += 25;
    }
    if(this.responsiveDesignSiteWebPrezentare) {
      defaultPrice += 100;
    }
    if(this.adminPanelSiteWebPrezentare) {
      defaultPrice += 50;
    }
    if(this.fotoVideoSiteWebPrezentare) {
      defaultPrice += 25;
    }
    if(this.slideshowSiteWebPrezentare) {
      defaultPrice += 25;
    }
    if(this.seoSiteWebPrezentare) {
      defaultPrice += 100;
    }
    if(this.contactFormSiteWebPrezentare) {
      defaultPrice += 50;
    }
    if(this.multilanguageSiteWebPrezentare) {
      defaultPrice += 100;
    }
    if(this.portofolioSiteWebPrezentare) {
      defaultPrice += 50;
    }
    if(this.reservationSistemSiteWebPrezentare) {
      defaultPrice += 100;
    }
    if(this.localizeSiteWebPrezentare) {
      defaultPrice += 50;
    }
    if(this.pageNumbersSiteWebPrezentareSelectedValue == 2) {
      defaultPrice += 50;
    }
    this.price = defaultPrice;
  }

  calculateMagazinOnlinePrice() {
    let defaultPrice = 199;
    if(this.pageNumbersMagazinOnlineSelectedValue == 2) {
      defaultPrice += 100;
    }
    if(this.stocksMagazinOnline) {
      defaultPrice += 25;
    }
    if(this.shoppingCartMagazinOnline) {
      defaultPrice += 25;
    }
    if(this.shippingMagazinOnline) {
      defaultPrice += 25;
    }
    if(this.onlinePaymentMagazinOnline) {
      defaultPrice += 50;
    }
    if(this.discountMagazinOnline) {
      defaultPrice += 25;
    }
    if(this.invoiceMagazinOnline) {
      defaultPrice += 50;
    }
    if(this.productsAndCategoriesMagazinOnline) {
      defaultPrice += 25;
    }
    if(this.productsVariables) {
      defaultPrice += 25;
    }
    if(this.responsiveDesignMagazinOnline) {
      defaultPrice += 50;
    }
    if(this.adminPanelMagazinOnline) {
      defaultPrice += 50;
    }
    if(this.fotoVideoMagazinOnline) {
      defaultPrice += 25;
    }
    if(this.slideshowMagazinOnline) {
      defaultPrice += 25;
    }
    if(this.seoMagazinOnline) {
      defaultPrice += 100;
    }
    if(this.contactFormMagazinOnline) {
      defaultPrice += 25;
    }
    if(this.gdprMagazinOnline) {
      defaultPrice += 25;
    }
    if(this.multilanguageMagazinOnline) {
      defaultPrice += 100;
    }
    if(this.reservationSistemMagazinOnline) {
      defaultPrice += 50;
    }
    if(this.portofolioMagazinOnline) {
      defaultPrice += 25;
    }
    if(this.localizeMagazinOnline) {
      defaultPrice += 25;
    }
    if(this.logoMagazinOnline) {
      defaultPrice += 50;
    }
    if(this.bannerMagazinOnline) {
      defaultPrice += 50;
    }
    this.price = defaultPrice;
  }

}
