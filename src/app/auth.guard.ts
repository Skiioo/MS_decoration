import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service'; // Assurez-vous que le chemin d'importation est correct
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  


  constructor(private authService: AuthService, private router: Router) { } // AuthService est injecté ici

  canActivate(): boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/form-admin']);
      return false;
    }
    return true; // Maintenant, vous devriez pouvoir appeler isLoggedIn
  }
}