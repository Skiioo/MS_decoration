import { Component } from '@angular/core';
import { DataService } from '../../../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-devis',
  templateUrl: './details-devis.component.html',
  styleUrl: './details-devis.component.css'
})
export class DetailsDevisComponent {

data: any;

constructor(private route: ActivatedRoute, private dataService: DataService) { }

ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.dataService.readoneDevis(params['id']).subscribe((data: any) => {
      this.data = data;
    });
  });

}
}