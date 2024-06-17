import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  public isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
  }

  

  
  constructor() { }
}
