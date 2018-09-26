import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Package } from './package.model';

@Injectable()
export class PackageService {
  selectedPackage: Package;
  package: Package[];
  readonly baseURL = 'http://localhost:4201/packages';

  constructor(private http: HttpClient) { }

  postPackage(p: Package) {
    return this.http.post(this.baseURL, p);
  }

  getPackageList() {
    return this.http.get(this.baseURL);
  }

  putPackage(p: Package) {
    return this.http.put(this.baseURL + `/${p._id}`, p);
  }

  deletePackage(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
