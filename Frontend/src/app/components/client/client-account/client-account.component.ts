import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

import { ItenararyPayment } from './../../../services/payment-service/itenarary-payment/itenarary-payment.model';
import { ItenararyPaymentService } from './../../../services/payment-service/itenarary-payment/itenarary-payment.service';
@Component({
  selector: 'app-client-account',
  templateUrl: './client-account.component.html',
  styleUrls: ['./client-account.component.css'],
  providers: [ItenararyPaymentService, ItenararyPayment]

})
export class ClientAccountComponent implements OnInit {


  user:any;
  constructor(
    private authService:AuthService,
    private router:Router,
    public itenararyPaymentService: ItenararyPaymentService,
    private itenararyPayment: ItenararyPayment,
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(res=>{
      this.user = res.data.user;
      console.log(this.user);
    })
    this.refreshPaymentList();
  }

  refreshPaymentList() {
    this.itenararyPaymentService.getItenararyPaymentList().subscribe((res) => {
      this.itenararyPaymentService.itenararypayment = res as ItenararyPayment[];
    });
  }

}
