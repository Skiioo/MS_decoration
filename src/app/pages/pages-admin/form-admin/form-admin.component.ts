import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth.service';


@Component({
  selector: 'app-form-admin',
  templateUrl: './form-admin.component.html',
  styleUrls: ['./form-admin.component.css']
})
export class FormAdminComponent {
  [x: string]: any;
  form: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    mdp: new FormControl('', Validators.required),
  });

  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {}

  onSubmit() {
    const id = this.form.get('id')!.value;
    const password = this.form.get('mdp')!.value;

  this.postDataAdmin(id, password).subscribe(response => {
    if (response && response.valid) {
      this.authService.login();
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/form-admin']);
    }
  });
  }

  postDataAdmin(id: string, password: string): Observable<any> {
    return this.http.post('http://localhost:5000/admin', { id, password });
  }
}