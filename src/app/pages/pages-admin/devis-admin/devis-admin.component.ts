import { Component } from '@angular/core';
import { DataService } from '../../../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-devis-admin',
  templateUrl: './devis-admin.component.html',
  styleUrl: './devis-admin.component.css'
})
export class DevisAdminComponent {
  data: any[] = []; 

  constructor(private dataService: DataService) { 
    this.dataService.getDataDevis().subscribe((data: any) => { 

      this.data = data;
    });

  }
  delete(id: number) {
    this.dataService.deleteDevis(id).subscribe(
      response => {
       
        this.data = this.data.filter(item => item.id !== id);
      },
      error => {
        console.error('Erreur lors de la suppression des données', error);
      }
    );
  }
  
 readoneDevis(id: number) {
    this.dataService.readone(id).subscribe(
      response => {
        console.log('Données récupérées avec succès', response);
      },
      error => {
        console.error('Erreur lors de la récupération des données', error);
      }
    );
  }
}
