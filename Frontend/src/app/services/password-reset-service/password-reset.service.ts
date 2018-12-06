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
    return this.http.post(this.baseURL+"/reset", u);
  }

  getPasswordReset(id:String, token:String){
    return this.http.get(this.baseURL + "/resetpassword" + `/${id}` + `/${token}`);
  }

  postPassword(u: User) {
    return this.http.post(this.baseURL + "/resetpassword", u);
  }

}
