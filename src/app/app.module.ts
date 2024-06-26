import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validator } from '@angular/forms';




import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ContactAdminComponent } from './pages/pages-admin/contact-admin/contact-admin.component';
import { DevisAdminComponent } from './pages/pages-admin/devis-admin/devis-admin.component';
import { DetailsComponent } from './pages/pages-admin/details/details.component';
import { DevisComponent } from './pages/devis/devis.component';
import { FooterComponent } from './components/footer/footer.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FbcontactComponent } from './pages/feedback/fbcontact/fbcontact.component';
import { DetailsDevisComponent } from './pages/pages-admin/details-devis/details-devis.component';
import { RealComponent } from './pages/real/real.component';
import { CommonModule } from '@angular/common';
import { FbdevisComponent } from './pages/feedback/fbdevis/fbdevis.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { BackgroundComponent } from './components/background/background.component';
import { FormAdminComponent } from './pages/pages-admin/form-admin/form-admin.component';
import { AuthGuard } from './auth.guard';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AProposComponent,
    AdminComponent,
    ContactAdminComponent,
    DevisAdminComponent,
    DetailsComponent,
    DevisComponent,
    FooterComponent,
    MentionsLegalesComponent,
    FbcontactComponent,
    DetailsDevisComponent,
    RealComponent,
    FbdevisComponent,
    ErrorPageComponent,
    BackgroundComponent,
    FormAdminComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    provideClientHydration(),
    [AuthGuard]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
