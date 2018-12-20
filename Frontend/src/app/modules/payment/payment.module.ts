import { HeaderBarModule } from './../header-bar/header-bar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes } from '@angular/router';
import { ClientPaymentComponent } from '../../components/client/client-payment/client-payment.component';
import { ViewClientPaymentsComponent } from '../../components/payments/view-client-payments/view-client-payments.component';
import { ClientPaymentFilterPipe} from '../../components/payments/view-client-payments/client-payment-fliter.pipe'
import { TravelAgentPaymentComponent } from '../../components/travelAgent/travel-agent-payment/travel-agent-payment/travel-agent-payment.component';
import { ViewServiceproviderPaymentComponent } from '../../components/payments/view-serviceprovider-payment/view-serviceprovider-payment.component';
import { ViewTravelagentPaymentComponent } from '../../components/payments/view-travelagent-payment/view-travelagent-payment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule,
    HeaderBarModule
  ],
  declarations: [
    ClientPaymentComponent,
    ViewClientPaymentsComponent,
    ClientPaymentFilterPipe,
    TravelAgentPaymentComponent,
    ViewServiceproviderPaymentComponent,
    ViewTravelagentPaymentComponent
  ],
  exports: [
    ClientPaymentComponent,
    ViewClientPaymentsComponent,
    ClientPaymentFilterPipe,
    TravelAgentPaymentComponent,
    ViewServiceproviderPaymentComponent,
    ViewTravelagentPaymentComponent
  ]
})
export class PaymentModule { }
