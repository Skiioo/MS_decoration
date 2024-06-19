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
import { ErrorPageComponent } from './pages/error-page/error-page.component';

import { FormAdminComponent } from './pages/pages-admin/form-admin/form-admin.component';
import { AuthGuard } from './auth.guard';




const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: '404', component: ErrorPageComponent  },
  
  { path: 'a-propos', component: AProposComponent },
  { path: 'devis', component: DevisComponent},
  { path: 'mentions-legales', component: MentionsLegalesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'feedback-contact', component: FbcontactComponent },
  { path: 'realisation', component: RealComponent },
  {path: 'feedback-devis', component: FbdevisComponent},
  {path: 'form-admin', component: FormAdminComponent},
  
 

  {
    path: 'admin', 
    component: AdminComponent, canActivate: [AuthGuard],
    children: [
      
      { path: '', component: ContactAdminComponent },
      { path: 'contact-admin', component: ContactAdminComponent },
      { path: 'devis-admin', component: DevisAdminComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: 'details-devis/:id', component: DetailsDevisComponent },
      

    ]
  },

  { path: '**', redirectTo: '404' },
];






@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})

export class AppRoutingModule { }
