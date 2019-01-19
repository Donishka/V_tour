import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ItenararyPaymentService } from '../../../services/payment-service/itenarary-payment/itenarary-payment.service';
import { ClientPaymentService } from '../../../services/sharedata/client-payment.service';

@Component({
  selector: 'app-client-payment',
  templateUrl: './client-payment.component.html',
  styleUrls: ['./client-payment.component.css'],
  providers: [ItenararyPaymentService]
})
export class ClientPaymentComponent implements OnInit {

  user: any;
  today: number = Date.now();
  public current_date = new Date();
  time: any;

  amount:any;
  itname:any;
  itid:any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService,
    public itenararyPaymentService: ItenararyPaymentService,
    private flashMessage: FlashMessagesService,
    public  clientPaymentService: ClientPaymentService
  ) { }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

    this.resetForm();
    this.getProfileDetails();
    this.itname=this.clientPaymentService.itenararyname;
    this.amount=this.clientPaymentService.amount;
    this.itid=this.clientPaymentService.itenararyid;
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.itenararyPaymentService.selectedItenararyPayment = {
      _id: "",
      clientid: "",
      clientname:"",
      itenararyid:"",
      itenararyname:"",
      amount: "",
      date: "",
      status: "",

    }
  }
  resetForm1(form?: NgForm) {
    if (form)
      this.itenararyPaymentService.selectedItenararyPayment = {
        _id: "",
        clientid: "",
        clientname: "",
        itenararyid: "",
        itenararyname: "",
        amount: "",
        date: "",
        status: "",
      }
  }

  onSubmit(form: NgForm) {
    confirm("Please confirm to proceed");
    this.itenararyPaymentService.postItenararyPayment(form.value).subscribe((res) => {
      this.flashMessage.show('Purchased', { cssClass: 'alert-success', timeout: 4000 });
      this.resetForm1(form);
      console.log(form.value);
    });
  }

  getProfileDetails() {
    console.log('get details');
    this.authService.getProfile().subscribe(res => {
      this.user = res.data.user;
      console.log(this.user);
    });
  }

}