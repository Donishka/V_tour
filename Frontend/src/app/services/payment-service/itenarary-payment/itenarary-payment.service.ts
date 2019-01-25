import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ItenararyPayment } from './itenarary-payment.model';

@Injectable()
export class ItenararyPaymentService {

  selectedItenararyPayment: ItenararyPayment;
  itenararypayment: ItenararyPayment[];
  
  readonly baseURL = 'http://localhost:4201/itenararypayments';

  constructor(private http: HttpClient) { }

  postItenararyPayment(p: ItenararyPayment) {
    return this.http.post(this.baseURL, p);
  }

  getItenararyPaymentList() {
    return this.http.get(this.baseURL);
  }

  putItenararyPayment(p: ItenararyPayment) {
    return this.http.put(this.baseURL + `/${p._id}`, p);
  }

  putItenararyPaymentReject(p: ItenararyPayment) {
    return this.http.put(this.baseURL +"/reject"+ `/${p._id}`, p);
  }

  deleteItenararyPayment(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
