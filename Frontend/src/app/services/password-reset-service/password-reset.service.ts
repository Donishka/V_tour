import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { User } from '../../services/user-service/user.model';
@Injectable({
  providedIn: 'root'
})
export class PasswordResetService {

  readonly baseURL = 'http://localhost:4201/forgotpassword';

  constructor(private http: HttpClient) { }

  postEmail(u: User) {
    console.log(u);
    return this.http.post(this.baseURL+"/reset", u);
  }
}
