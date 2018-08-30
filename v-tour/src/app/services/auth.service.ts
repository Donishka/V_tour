import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {

  authToken:any;
  user:any;

  constructor(private http:Http) { }

  addNewUser(user){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:4201/users',user,{headers:headers}).map(res=>res.json);
  }
}
