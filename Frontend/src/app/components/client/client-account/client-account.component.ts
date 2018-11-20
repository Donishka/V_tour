
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
  user: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    public itenararyPaymentService: ItenararyPaymentService,
    private itenararyPayment: ItenararyPayment,
    private dataS: SharedataService,
    public itineraryService: ItineraryService,
    private clientPaymentService: ClientPaymentService,
  ) {
    this.dataS.shareUserData();
    this.dataS.currentMessge.subscribe(traveAgentdata => {
      this.itinerary.traveAgentName = traveAgentdata.username;
      this.refreshItinerryList();
    });
  }

  ngOnInit() {
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

  onPayment(i: number) {
    this.clientPaymentService.amount = this.itineraryService.itenarary[i].totalPrice;
    this.clientPaymentService.itenararyid = this.itineraryService.itenarary[i]._id;
    this.clientPaymentService.itenararyname = this.itineraryService.itenarary[i].name;
    this.router.navigateByUrl('/client-payment');
  }

}

