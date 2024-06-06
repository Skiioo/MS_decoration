import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  data: any = {
    nom: '',
    prenom: '',
    email: '',
    num: '',
    description: ''
  };
  contactForm = new FormGroup({
    prenom: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    num: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });


  constructor(private dataService: DataService) { }

  postData() {

    if(this.contactForm.valid){
    this.dataService.postData(this.data).subscribe(
      response => {
        console.log('Données envoyées avec succès', response);
      },
      error => {
        console.error('Erreur lors de l\'envoi des données', error);
      }
    );


  }
}
}
