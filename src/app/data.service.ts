import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://localhost:5000/coordonnees');
  }

  postData(data: any) {
    return this.http.post('http://localhost:5000/coordonnees', data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`http://localhost:5000/coordonnees/${id}`);
  }

  readone(id: number): Observable<any> {
    return this.http.get(`http://localhost:5000/coordonnees/${id}`);
  }


  //appel de l'API pour les devis
  getDataDevis() {
    return this.http.get('http://localhost:5000/devis');
  }
  postDataDevis(data: any) {
    return this.http.post('http://localhost:5000/devis', data);
  }

  deleteDevis(id: number): Observable<any> {
    return this.http.delete(`http://localhost:5000/devis/${id}`);
  }

  readoneDevis(id: number): Observable<any> {
    return this.http.get(`http://localhost:5000/devis/${id}`);
  }

  checkCredentials(id: string, password: string): Observable<any> {
    return this.http.post('http://localhost:5000/checkCredentials', { id, password });
  }

  isAuthenticated = false;

  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
  }
}
