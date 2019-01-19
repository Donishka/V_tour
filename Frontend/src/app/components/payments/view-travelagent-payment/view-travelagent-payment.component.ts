import { PackagePayment } from './../../../services/payment-service/package-payment/package-payment.model';
import { PackagePaymentService } from './../../../services/payment-service/package-payment/package-payment.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-view-travelagent-payment',
  templateUrl: './view-travelagent-payment.component.html',
  styleUrls: ['./view-travelagent-payment.component.css'],
  providers: [PackagePaymentService, PackagePayment]

})
export class ViewTravelagentPaymentComponent implements OnInit {
  user:any;
  searchKeyword: any;
  constructor(public packagePaymentService: PackagePaymentService,
    private packagePayment: PackagePayment,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private authService:AuthService) { }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
    this.refreshPaymentList();
    this.getProfileDetails();
  }

  refreshPaymentList() {
    this.packagePaymentService.getPackagePaymentList().subscribe((res) => {
      this.packagePaymentService.packagepayment = res as PackagePayment[];
    });
  }

  onConfirm(packagepayment: PackagePayment) {
    this.packagePaymentService.putPackagePayment(packagepayment).subscribe((res) => {
      this.refreshPaymentList();
      this.flashMessage.show('Payment Status Updated', { cssClass: 'alert-success', timeout: 4000 });
    });
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.packagePaymentService.deletePackagePayment(_id).subscribe((res) => {
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

