import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ServiceProvider } from './serviceprovider.model';

@Injectable()
export class ServiceProviderService {
  selectedServiceProvider: ServiceProvider;
  sp: ServiceProvider[];
  readonly baseURL = 'http://localhost:4201/serviceproviders';

  constructor(private http: HttpClient) { }


  postServiceProvider(sp: ServiceProvider) {
    return this.http.post(this.baseURL, sp);
  }

  getServiceProviderList() {
    return this.http.get(this.baseURL);
  }

  get1ServiceProvider(_id:string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  putServiceProvider(sp: ServiceProvider) {
    return this.http.put(this.baseURL + `/${sp._id}`, sp);
  }

  putServiceProviderPw(sp: ServiceProvider) {
    return this.http.put(this.baseURL + "/changepw" + `/${sp._id}`, sp);
  }

  putServiceProviderPic(sp: ServiceProvider) {
    return this.http.put(this.baseURL + "/profilepic" + `/${sp._id}`, sp);
  }

  deleteServiceProvider(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}

