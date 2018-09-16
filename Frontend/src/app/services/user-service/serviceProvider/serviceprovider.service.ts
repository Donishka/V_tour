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
    console.log("post");
    return this.http.post(this.baseURL, sp);
  }

  getServiceProviderList() {
    console.log("get");
    return this.http.get(this.baseURL);
    
  }

  putServiceProvider(sp: ServiceProvider) {
    console.log("put");
    return this.http.put(this.baseURL + `/${sp._id}`, sp);
    
  }

  deleteServiceProvider(_id: string) {
    console.log("delete");
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}

