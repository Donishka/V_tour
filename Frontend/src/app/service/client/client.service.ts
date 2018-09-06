import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Client } from './client.model';

@Injectable()
export class ClientService {
  selectedClient: Client;
  client: Client[];
  readonly baseURL = 'http://localhost:4201/clients';

  constructor(private http: HttpClient) { }


  postClient(client: Client) {
    return this.http.post(this.baseURL, client);
  }

  getClientList() {
    return this.http.get(this.baseURL);
  }

  putClient(client: Client) {
    return this.http.put(this.baseURL + `/${client._id}`, client);
  }

  deleteClient(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}

