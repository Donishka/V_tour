import { HeaderBarModule } from './../header-bar/header-bar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes } from '@angular/router';
import { ClientPaymentComponent } from '../../components/client/client-payment/client-payment.component';
import { ViewClientPaymentsComponent } from '../../components/payments/view-client-payments/view-client-payments.component';
import { ClientPaymentFilterPipe} from '../../components/payments/view-client-payments/client-payment-fliter.pipe'
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
    ClientPaymentFilterPipe
  ],
  exports: [
    ClientPaymentComponent,
    ViewClientPaymentsComponent,
    ClientPaymentFilterPipe
  ]
})
export class PaymentModule { }
