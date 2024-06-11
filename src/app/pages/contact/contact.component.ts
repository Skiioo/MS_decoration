import { Component } from '@angular/core';
import { DataService } from '../../data.service';


import { ControlContainer, FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule, FormatWidth } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-contact',
  standalone:true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  imports:[CommonModule, FormsModule, ReactiveFormsModule, ],


})
export class ContactComponent {

  

  form:FormGroup = new FormGroup({
    prenom: new FormControl('', [Validators.required]),
    nom: new FormControl('', [Validators.required]),

    email: new FormControl('', [Validators.required, Validators.email]),
    description: new FormControl('', [Validators.required]),
    num:new FormControl('', [Validators.required, Validators.pattern(/^\d{9}$/)]),
  })


  data: any = {
    nom: '',
    prenom: '',
    email: '',
    num: '',
    description: ''
  };



  constructor(private dataService: DataService, private router:Router) { }

  
  postData() {
    //vérification des donner des les inputs
    if (Object.values(this.form.value).every(value => value !== '')) {
      this.dataService.postData(this.form.value).subscribe(
        response => {
          console.log('Données envoyées avec succès', response);

          //redirection de l'utilisateur quand le formulaire est validé
          this.router.navigate(['feedback-contact'])
        },
        error => {
          console.error('Erreur lors de l\'envoi des données', error);
        }
      );
    } else {
      console.error('Tous les champs doivent être remplis');
    }
  }

}

  
  


