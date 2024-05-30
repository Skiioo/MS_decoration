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

}
