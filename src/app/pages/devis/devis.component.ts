import { Component } from '@angular/core';
import { DataService} from '../../data.service';

import { ControlContainer, FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule, FormatWidth } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrl: './devis.component.css'
})
export class DevisComponent {

form:FormGroup = new FormGroup({
  nom: new FormControl('', [Validators.required]),
  prenom: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required, Validators.email]),
  description: new FormControl('', [Validators.required]),
  societe: new FormControl('', [Validators.required]),
  surface: new FormControl('', [Validators.required]),
  estimation: new FormControl('', [Validators.required]),
  peinture: new FormControl('', [Validators.required]),
  typeclient: new FormControl('', [Validators.required]),
  num: new FormControl('', [Validators.required]),
  
})

data: any = {
  nom:'',
  prenom:'',
  email: '',
  description: '',
  societe:'',
  surface:'',
  peinture:'',
  estimation:'',
  typeclient:'',
  

}

postDataDevis(){
if (this.form.value.nom !== '' && this.form.value.prenom !== '' && this.form.value.email !== '' && this.form.value.surface !== '' && this.form.value.description !== '' && this.form.value.typeclient !== '' && this.form.value.peinture !== '' && this.form.value.societe !== '' && this.form.value.num !== '' && this.form.value.estimation !== '') {

  this.dataService.postDataDevis(this.form.value).subscribe(
    response => {
      console.log('Données envoyées avec succès', response);
      console.log(this.form.value);

      this.router.navigate(['feedback-devis'])
    },
    error => {
      console.error('Erreur lors de l\'envoi des données', error);
    }
  );
}
}

  constructor(private dataService: DataService, private router:Router) {
    this.estimation = 0;
    this.style = 0;
    this.surface = 0;
  }

  style: number;
  surface: number;
  estimation: number = 0;

 

  estimate() {
    this.estimation = this.style * this.surface;
  }

  
}
