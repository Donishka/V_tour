import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from './user.model';

@Injectable()
export class UserService {
  selectedUser: User;
  users: User[];
  readonly baseURL = 'http://localhost:4201/users';

  constructor(private http: HttpClient) { }

  postUser(user: User) {
    console.log("Post");
    return this.http.post(this.baseURL, user);
  }

  getUserList() {
    console.log("Get");
    return this.http.get(this.baseURL);
  }

  putUser(user: User) {
    console.log("Put");
    return this.http.put(this.baseURL + `/${user._id}`, user);
  }

  deleteUser(_id: string) {
    console.log("Delete");
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
