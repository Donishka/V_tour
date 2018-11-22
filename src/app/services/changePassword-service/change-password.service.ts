import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { TravelAgent } from '../user-service/travelAgent/travelagent.model';
import { ServiceProvider } from '../user-service/serviceProvider/serviceprovider.model';

import { Password } from './password.model';


@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {
  selectedTravelAgent: TravelAgent;
  tagent: TravelAgent[];

  selectedServiceProvider: ServiceProvider;
  sp: ServiceProvider[];

  readonly baseURL1 = 'http://localhost:4201/travelagents/changepassword';
  readonly baseURL2 = 'http://localhost:4201/serviceproviders/changepassword';

  constructor(private http: HttpClient) { }

  putTravelAgent(tagent: TravelAgent) {
    return this.http.put(this.baseURL1 + `/${tagent._id}`, tagent);
  }

  putServiceProvider(sp: ServiceProvider) {
    return this.http.put(this.baseURL2 + `/${sp._id}`, sp);
  }

}
