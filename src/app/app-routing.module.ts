import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { AdminComponent } from './pages/admin/admin.component';

import { ContactAdminComponent } from './pages/pages-admin/contact-admin/contact-admin.component';
import { DevisAdminComponent } from './pages/pages-admin/devis-admin/devis-admin.component';
import { DetailsComponent } from './pages/pages-admin/details/details.component';
import { DevisComponent } from './pages/devis/devis.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'devis', component: DevisComponent},
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      
      { path: '', component: ContactAdminComponent },
      { path: 'contact-admin', component: ContactAdminComponent },
      { path: 'devis-admin', component: DevisAdminComponent },
      { path: 'detail/:id', component: DetailsComponent }
    ]
  },
];






@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})

export class AppRoutingModule { }
