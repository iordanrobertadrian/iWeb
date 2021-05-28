import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/shared/canonical.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  title =
    'Cere Oferta | Creare Magazin Online | Creare Site Prezentare | iWeb-Solution';
  name: string;
  email: string;
  phone: string;
  description: string;
  promoCode: string;
  constructor(
    private afs: AngularFirestore,
    private _snackBar: MatSnackBar,
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
          'Cere oferta pentru servicii profesionale in ceea ce priveste crearea de magazine online si site-uri web pentru prezentarea afacerii dumneavoastra.',
      },
      { charset: 'UTF-8' },
    ]);
    this.titleService.setTitle(this.title);
    this.canonicalService.setCanonicalURL();
  }

  submit() {
    const contactForm = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      description: this.description,
      promoCode: this.promoCode,
    };
    return this.afs
      .collection('CereriOferta')
      .add(contactForm)
      .then((success) => {
        this._snackBar.open(
          'Cererea de oferta a fost trimisa cu success. Va vom contacta in cel mai scurt timp!',
          'Inchide',
          {}
        );
        this.name = '';
        this.email = '';
        this.phone = '';
        this.description = '';
        this.promoCode = '';
      });
  }
}
