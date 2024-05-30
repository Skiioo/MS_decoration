import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ContactAdminComponent } from './pages/pages-admin/contact-admin/contact-admin.component';
import { DevisAdminComponent } from './pages/pages-admin/devis-admin/devis-admin.component';
import { DetailsComponent } from './pages/pages-admin/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AProposComponent,
    AdminComponent,
    ContactAdminComponent,
    DevisAdminComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    HttpClientJsonpModule
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
