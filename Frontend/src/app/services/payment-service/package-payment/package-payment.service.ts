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
  packagepayment: PackagePayment[];

  readonly baseURL = 'http://13.232.48.250:4201/packagepayments';

  constructor(private http: HttpClient) { }

  postPackagePayment(p: PackagePayment) {
    return this.http.post(this.baseURL, p);
  }

  getPackagePaymentList() {
    return this.http.get(this.baseURL);
  }

  putPackagePayment(p: PackagePayment) {
    return this.http.put(this.baseURL + `/${p._id}`, p);
  }
  putPackagePaymentReject(p: PackagePayment) {
    return this.http.put(this.baseURL + "/reject" + `/${p._id}`, p);
  }

  deletePackagePayment(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}

