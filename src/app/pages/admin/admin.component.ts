import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  data: any[] = []; // Cette propriété stockera le nom provenant de l'API

  constructor(private dataService: DataService) { 
    this.dataService.getData().subscribe((data: any) => { 

      this.data = data;
    });

  }
  delete(id: number) {
    this.dataService.delete(id).subscribe(
      response => {
        // Supprimez l'élément de votre tableau de données seulement si la suppression a réussi sur le serveur
        this.data = this.data.filter(item => item.id !== id);
      },
      error => {
        console.error('Erreur lors de la suppression des données', error);
      }
    );
  }
  
 readone(id: number) {
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
