import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { TravelAgent } from './travelagent.model';

@Injectable()
export class TravelAgentService {
  selectedTravelAgent: TravelAgent;
  tagent: TravelAgent[];
  readonly baseURL = 'http://localhost:4201/travelagents';

  constructor(private http: HttpClient) { }


  postTravelAgent(tagent: TravelAgent) { 
    return this.http.post(this.baseURL, tagent);
  }

  getTravelAgentList() {
    return this.http.get(this.baseURL);
  }

  putTravelAgent(tagent: TravelAgent) {
    return this.http.put(this.baseURL + `/${tagent._id}`, tagent);
  }

  deleteTravelAgent(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

  /// Pop Up Model


  editContact(tagent: TravelAgent) {
    const index = this.tagent.findIndex(c => c._id === tagent._id);
    this.tagent[index] = tagent;
  }

  getAllContacts() {
    return this.tagent;
  }

}

