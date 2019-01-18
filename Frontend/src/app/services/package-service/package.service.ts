import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  getOnePackageList(_id:string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  putPackage(p: Package) {
    return this.http.put(this.baseURL + `/${p._id}`, p);
  }

  putPackagePic(_id) {
    return this.http.put(this.baseURL + "/profilepic" + `/${_id}`,_id);
  }

  deletePackage(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
