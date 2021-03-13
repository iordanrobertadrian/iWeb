import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  name: string;
  email: string;
  phone: string;
  description: string;
  constructor(
    private afs: AngularFirestore,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }

  submit() {
    const contactForm = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      description: this.description
    };
    return this.afs.collection('CereriOferta').add(contactForm).then(success => {
      this._snackBar.open('Cererea de oferta a fost trimisa cu success. Va vom contacta in cel mai scurt timp!', 'Inchide', {
      });
      this.name = '';
      this.email = '';
      this.phone = '';
      this.description = '';
    });
  }

}
