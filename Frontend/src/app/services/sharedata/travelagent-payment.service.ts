import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TravelagentPaymentService {


  amount: Number;
  spid: String;
  spname: String;
  packageid: String;
  packagename: String;

  constructor() { }
}
