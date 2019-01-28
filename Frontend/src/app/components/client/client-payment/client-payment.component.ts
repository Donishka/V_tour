import { TravelAgentService } from './../../../services/user-service/travelAgent/travelagent.service';
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
  providers: [ItenararyPaymentService, TravelAgentService]
})
export class ClientPaymentComponent implements OnInit {

  user: any;
  today: number = Date.now();
  public current_date = new Date();
  time: any;

  amount:any;
  itname:any;
  itid:any;
  tausername:any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private TravelAgentService: TravelAgentService,
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
    this.tausername=this.clientPaymentService.tausername;
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.itenararyPaymentService.selectedItenararyPayment = {
      _id: "",
      clientid: "",
      clientname:"",
      tausername:"",
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
        tausername:"",
        itenararyid: "",
        itenararyname: "",
        amount: "",
        date: "",
        status: "",
      }
  }

  onSubmit(form: NgForm) {
    if (confirm("Please confirm to proceed")){
      this.itenararyPaymentService.postItenararyPayment(form.value).subscribe((res) => {
        this.flashMessage.show('Purchased', { cssClass: 'alert-success', timeout: 4000 });
        this.resetForm1(form);
      });
      /*this.TravelAgentService.getTravelAgentByUserName(form.value.tausername).subscribe((res=>{
        console.log("TA");
        console.log(res);
      }));*/
    }
  }

  getProfileDetails() {
    this.authService.getProfile().subscribe(res => {
      this.user = res.data.user;
      console.log(this.user);
    });
  }

}