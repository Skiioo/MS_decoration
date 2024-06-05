import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { HttpClient } from '@angular/common/http';

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

  constructor(private dataService: DataService) { }

  postData() {
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
