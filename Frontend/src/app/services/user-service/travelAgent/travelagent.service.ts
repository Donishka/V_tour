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
  type:string;
  
  readonly baseURL = 'http://13.232.48.250:4201/travelagents';

  constructor(private http: HttpClient) { }

  postTravelAgent(tagent: TravelAgent) { 
    return this.http.post(this.baseURL, tagent);
  }

  getTravelAgent(_id: string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  /*getTravelAgentByUserName(_username: string) {
    return this.http.get(this.baseURL + `/${_username}`);
  }*/

  getTravelAgentList() {
    return this.http.get(this.baseURL);
  }

  putTravelAgent(tagent: TravelAgent) {
    return this.http.put(this.baseURL + `/${tagent._id}`, tagent);
  }

  putTravelAgentPw(tagent: TravelAgent) {
    return this.http.put(this.baseURL +"/changepw"+ `/${tagent._id}`, tagent);
  }

  putTravelAgentProfilePic(tagent: TravelAgent) {
    return this.http.put(this.baseURL + "/profilepic" + `/${tagent._id}`, tagent);
  }

  deleteTravelAgent(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}

