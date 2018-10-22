import { ItenararyPayment } from './../../../services/payment-service/itenarary-payment/itenarary-payment.model';
import { ItenararyPaymentService } from './../../../services/payment-service/itenarary-payment/itenarary-payment.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-view-client-payments',
  templateUrl: './view-client-payments.component.html',
  styleUrls: ['./view-client-payments.component.css'],
  providers:[ItenararyPaymentService,ItenararyPayment]
})
export class ViewClientPaymentsComponent implements OnInit {

  constructor(public itenararyPaymentService: ItenararyPaymentService,
    private itenararyPayment: ItenararyPayment,
    private flashMessage: FlashMessagesService,
    private router: Router) { }

  ngOnInit() {
    this.refreshPaymentList();
  }

  refreshPaymentList() {
    this.itenararyPaymentService.getItenararyPaymentList().subscribe((res) => {
      this.itenararyPaymentService.itenararypayment = res as ItenararyPayment[];
    });
  }

  onConfirm(itenararypayment: ItenararyPayment) {
    this.itenararyPaymentService.putItenararyPayment(itenararypayment).subscribe((res) => {
      this.refreshPaymentList();
      this.flashMessage.show('Payment Status Updated', { cssClass: 'alert-success', timeout: 4000 });
      console.log("Updated");
      console.log(itenararypayment);
    });  
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.itenararyPaymentService.deleteItenararyPayment(_id).subscribe((res) => {
        this.refreshPaymentList();
      });
    }
  }

}
