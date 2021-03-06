import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/shared/canonical.service';
import { Project } from '../home/home.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  title =
    'Proiecte | Creare Magazin Online | Creare Site Prezentare | iWeb-Solution';
  projects: Project[] = [
    {
      title: 'ONIX SHOP',
      imagePath: '../../../assets/projects-screenshots/onix-shop-creare-magazin-online-creare-site-web-prezentare-iweb-solution.png',
      linkURL: 'https://www.onix-shop.com',
      description:
        'Onix-Shop este partenerul tau de incredere pentru achizitia de produse electronice, produse de bucatarie/gatit, produse fashion si multe altele, avand cea mai buna calitate si cele mai bune preturi. Vandute aproape in toata lumea, produsele alese de specialistii Onix-Shop se vor ridica la inaltimea asteptarilor dumneavoastra. Alege una dintre categoriile noastre de produse electronice si veti avea ocazia sa gasiti casti wireless, ceasuri smart watch, boxe audio, aspirator robot etc. , precum si produse electrocasnice, in special pentru bucatarie cum ar fi seturi de oale de gatit si aparate de cafea plus multe alte produse de calitate, stranse la un loc de catre echipa Onix-Shop.',
      badge: 'Magazin Online',
    },
    {
      title: 'AMY VILLAGE',
      imagePath: '../../../assets/projects-screenshots/amy-village-creare-site-web-prezentare-creare-magazin-online-iweb-solution.png',
      linkURL: 'https://www.amy-village.ro',
      description:
        'Amy village este un spatiu  special creat pentru activitati recreative de tip after-school si care pune pe primul loc pasiunile copiilor, daruind un mediu relaxant prin care ei se dezvolta placut, unde mancarea este gustoasa si sanatoasa, avand propria bucatarie si nu in ultimul rand venind sa invete intr-un mod placut.',
      badge: 'Site Web Prezentare',
    },
    {
      title: 'BEST MOMENTS',
      imagePath: '../../../assets/projects-screenshots/best-moments-creare-magazin-online-creare-site-web-prezentare-iweb-solution.png',
      linkURL: 'https://www.bestmoments-shop.com',
      description:
        'Suntem aici pentru ca este nevoie, nevoie de nou, de special, de "altceva". Incercam sa va oferim lucruri speciale, obiecte personalizate, produse ???altfel??? poate chiar iesite din eternul cotidian. Priviti, cantariti, evaluati si comandati.',
      badge: 'Magazin Online',
    },
    {
      title: 'YURI SHOP',
      imagePath: '../../../assets/projects-screenshots/yuri-shop-creare-magazin-online-creare-site-web-prezentare-iweb-solution.png',
      linkURL: 'https://www.yurishop.ro',
      description:
        'YuriShop va ofera spre v??nzare, produse noi si resigilate. Compania noastra importa produsele din Germania, calitatea produselor fiind garantata de T??v si piata germana.',
      badge: 'Magazin Online',
    },
    {
      title: 'ONLINE GAME SHOP',
      imagePath: '../../../assets/projects-screenshots/online-game-shop-creare-magazin-online-creare-site-web-prezentare-iweb-solution.png',
      linkURL: 'https://onlinegameshop-1603f.web.app',
      description:
        'Online Game Shop este un magazin online cu o variatie de jocuri diversificate atat pentru PS4 cat si pentru computer.',
      badge: 'Magazin Online',
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
          'Proiecte ale magazinelor online si a site-urilor web realizate de compania noastra iWeb-Solution.',
      },
      { charset: 'UTF-8' },
    ]);
    this.titleService.setTitle(this.title);
    this.canonicalService.setCanonicalURL();
  }
}
