
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ItineraryService } from '../../../services/itinerary-service/itinerary.service';
import { Itinerary } from '../../../services/itinerary-service/model/itinerary.model';
import { SharedataService } from '../../../services/sharedata/sharedata.service';
import { ItenararyPayment } from './../../../services/payment-service/itenarary-payment/itenarary-payment.model';
import { ItenararyPaymentService } from './../../../services/payment-service/itenarary-payment/itenarary-payment.service';
import { ClientPaymentService } from '../../../services/sharedata/client-payment.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-client-account',
  templateUrl: './client-account.component.html',
  styleUrls: ['./client-account.component.css'],
  providers: [ItenararyPaymentService, ItenararyPayment, ItineraryService]

})
export class ClientAccountComponent implements OnInit {

  itinerary: Itinerary = new Itinerary();
  view: boolean = true;
  isPopupOpened = false;
  Itinerary: any;
  user: any = { profilepic: "profilepic" };
  positions:any[]=[];
  display:boolean= false;
  lat: number = 6.978554010342724;
  lng: number = 79.96221732040647;

  constructor(
    private authService: AuthService,
    private router: Router,
    public itenararyPaymentService: ItenararyPaymentService,
    private itenararyPayment: ItenararyPayment,
    private dataS: SharedataService,
    public itineraryService: ItineraryService,
    private clientPaymentService: ClientPaymentService,
    private spinner: NgxSpinnerService

  ) {
    this.dataS.shareUserData();
    this.dataS.currentMessge.subscribe(traveAgentdata => {
      this.itinerary.traveAgentName = traveAgentdata.username;
      this.refreshItinerryList();
    });
  }

  ngOnInit() {

    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);

    this.authService.getProfile().subscribe(res => {
      this.user = res.data.user;
    })
    this.refreshPaymentList();
    this.refreshItinerryList();
  }

  refreshPaymentList() {
    this.itenararyPaymentService.getItenararyPaymentList().subscribe((res) => {
      this.itenararyPaymentService.itenararypayment = res as ItenararyPayment[];
    });
  }
  refreshItinerryList() {
    this.itineraryService.getItinerrytList1().subscribe((res) => {
      this.itineraryService.itenarary = res as Itinerary[];
    });
  }

  map(tourm:Itinerary){
    this.positions = [];
    for(var i in tourm.events){
      this.positions[i] = {name: tourm.events[i].venue, lat: tourm.events[i].lat, lng: tourm.events[i].lng };
    }
    this.display = true;
    console.log(JSON.stringify(this.positions));
  }

  onPayment(i: number) {
    this.clientPaymentService.amount = this.itineraryService.itenarary[i].totalPrice;
    this.clientPaymentService.itenararyid = this.itineraryService.itenarary[i]._id;
    this.clientPaymentService.itenararyname = this.itineraryService.itenarary[i].name;
    this.clientPaymentService.tausername = this.itineraryService.itenarary[i].traveAgentName;
    this.router.navigateByUrl('/client-payment');
  }

}

