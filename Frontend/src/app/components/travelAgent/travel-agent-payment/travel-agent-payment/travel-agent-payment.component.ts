import { PackagePaymentService } from './../../../../services/payment-service/package-payment/package-payment.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { TravelagentPaymentService } from '../../../../services/sharedata/travelagent-payment.service';
import { ItineraryService} from '../../../../services/itinerary-service/itinerary.service';

import { ServiceProviderService } from '../../../../services/user-service/serviceProvider/serviceprovider.service';
import { PackageService } from './../../../../services/package-service/package.service';


@Component({
  selector: 'app-travel-agent-payment',
  templateUrl: './travel-agent-payment.component.html',
  styleUrls: ['./travel-agent-payment.component.css'],
  providers: [PackagePaymentService, ServiceProviderService, PackageService]

})
export class TravelAgentPaymentComponent implements OnInit {

  today: number = Date.now();
  public current_date = new Date();
  time: any;
  fname:any;
  _id:any;
  constructor(
    private authService: AuthService,
    private router: Router,
    public travelagentPaymentService: TravelagentPaymentService,
    private itineraryService: ItineraryService,
    private flashMessage: FlashMessagesService,
    public packagePaymentService: PackagePaymentService,
    private serviceProviderService: ServiceProviderService,
    private packageService: PackageService,
    private spinner: NgxSpinnerService
  ) { }

  data:any;
  user: any = { _id: "_id",fname: "First name"};  
  package:any;
  event:any;
  sp:any;
  spid:any;

  ngOnInit() {

    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

    this.itineraryService.getOneItinerry(this.travelagentPaymentService.itenararyid).subscribe((res) => {
      this.data=res;
      this.event=this.data.events[this.travelagentPaymentService.index-1];
      this.spid=this.event.sp_id;

      this.serviceProviderService.get1ServiceProvider(this.spid).subscribe((res) => {
        this.sp = res;
      })

      this.packageService.getOnePackageList(this.event.pkg_id).subscribe((res)=>{
        this.package=res;
      })
    });
    
    
    this.resetForm();
    this.getProfileDetails();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.packagePaymentService.selectedPackagePayment = {
      _id: "",
      spid: "",
      spname: "",
      packageid: "",
      packagename: "",
      travelagentid: "",
      travelagentname: "",
      amount: "",
      date: "",
      status: "",
    }
  }
  resetForm1(form?: NgForm) {
    if (form)
      this.packagePaymentService.selectedPackagePayment = {
        _id: "",
        spid: "",
        spname: "",
        packageid: "",
        packagename: "",
        travelagentid: "",
        travelagentname: "",
        amount: "",
        date: "",
        status: "",
      }
  }

  onSubmit(form: NgForm) {
    confirm("Please confirm to proceed");
    this.packagePaymentService.postPackagePayment(form.value).subscribe((res) => {
      this.flashMessage.show('Purchased', { cssClass: 'alert-success', timeout: 4000 });
      this.resetForm1(form);
      console.log(form.value);
    });
  }

  getProfileDetails() {
    this.authService.getProfile().subscribe(res => {
      this.user = res.data.user;
    });
  }

}
