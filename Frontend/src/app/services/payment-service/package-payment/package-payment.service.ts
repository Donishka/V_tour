import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { PackagePayment } from './package-payment.model';

@Injectable({
  providedIn: 'root'
})
export class PackagePaymentService {

  selectedPackagePayment: PackagePayment;
  PackagePayment: PackagePayment[];

  readonly baseURL = 'http://localhost:4201/packagepayments';

  constructor(private http: HttpClient) { }

  postPackagePayment(p: PackagePayment) {
    console.log(p);
    return this.http.post(this.baseURL, p);
  }

  getPackagePaymentList() {
    return this.http.get(this.baseURL);
  }

  putPackagePayment(p: PackagePayment) {
    return this.http.put(this.baseURL + `/${p._id}`, p);
  }

  deletePackagePayment(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}

