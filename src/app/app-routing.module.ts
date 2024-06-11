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
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FbcontactComponent } from './pages/feedback/fbcontact/fbcontact.component';
import { DetailsDevisComponent } from './pages/pages-admin/details-devis/details-devis.component';
import { RealComponent } from './pages/real/real.component';
import { FbdevisComponent } from './pages/feedback/fbdevis/fbdevis.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'devis', component: DevisComponent},
  { path: 'mentions-legales', component: MentionsLegalesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'feedback-contact', component: FbcontactComponent },
  { path: 'realisation', component: RealComponent },
  {path: 'feedback-devis', component: FbdevisComponent},

  {
    path: 'admin',
    component: AdminComponent,
    children: [
      
      { path: '', component: ContactAdminComponent },
      { path: 'contact-admin', component: ContactAdminComponent },
      { path: 'devis-admin', component: DevisAdminComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: 'details-devis/:id', component: DetailsDevisComponent }

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
