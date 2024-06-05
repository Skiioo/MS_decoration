import { Component } from '@angular/core';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrl: './devis.component.css'
})
export class DevisComponent {
  constructor() {
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
