import { AuthService } from './../../../services/auth.service';
import { ItenararyPayment } from './../../../services/payment-service/itenarary-payment/itenarary-payment.model';
import { ItenararyPaymentService } from './../../../services/payment-service/itenarary-payment/itenarary-payment.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
declare var M: any;

@Component({
  selector: 'app-view-client-payments',
  templateUrl: './view-client-payments.component.html',
  styleUrls: ['./view-client-payments.component.css'],
  providers:[ItenararyPaymentService,ItenararyPayment]
})
export class ViewClientPaymentsComponent implements OnInit {
  searchKeyword:any;
  constructor(public itenararyPaymentService: ItenararyPaymentService,
    private itenararyPayment: ItenararyPayment,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private spinner: NgxSpinnerService,
    public authService:AuthService) { }

    user:any;

  ngOnInit() {
    this.getProfileDetails();
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

    this.refreshPaymentList();
  }

  refreshPaymentList() {
    this.itenararyPaymentService.getItenararyPaymentList().subscribe((res) => {
      this.itenararyPaymentService.itenararypayment = res as ItenararyPayment[];
    });
  }

  onConfirm(itenararypayment: ItenararyPayment) {
    if(confirm("Are you sure to ACCEPT this payment ?")){
      this.itenararyPaymentService.putItenararyPayment(itenararypayment).subscribe((res) => {
        this.refreshPaymentList();
        this.flashMessage.show('Payment Status Updated', { cssClass: 'alert-success', timeout: 4000 });
      });  
    }
  }

  onReject(itenararypayment: ItenararyPayment) {
    if (confirm("Are you sure to REJECT this payment ?")) {
      this.itenararyPaymentService.putItenararyPaymentReject(itenararypayment).subscribe((res) => {
        this.refreshPaymentList();
        this.flashMessage.show('Payment Status Updated', { cssClass: 'alert-success', timeout: 4000 });
      });
    }
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.itenararyPaymentService.deleteItenararyPayment(_id).subscribe((res) => {
        this.refreshPaymentList();
      });
    }
  }
  getProfileDetails() {
    this.authService.getProfile().subscribe(res => {
      this.user = res.data.user;
    });
  }

}
