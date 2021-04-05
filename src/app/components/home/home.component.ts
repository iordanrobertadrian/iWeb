import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
interface Review {
  description: string;
  reviewedBy: string;
  imageURL: string;
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
      linkURL: 'https://www.onix-shop.com'
    },
    {
      title: 'AMY VILLAGE',
      imagePath: '../../../assets/projects/amy-village.svg',
      linkURL: 'https://www.amy-village.ro'
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
