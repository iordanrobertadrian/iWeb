import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
interface Review {
  description: string;
  reviewedBy: string;
  imageURL: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  reviews: Observable<Review[]>
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.reviews = this.afs.collection<Review>('Reviews').valueChanges();
  }

}
