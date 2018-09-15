import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes }  from '@angular/router';

import { TravelAgentAccountComponent } from '../../components/travelAgent/travel-agent-account/travel-agent-account.component';
import { ServiceProviderAccountComponent } from '../../components/serviceProvider/service-provider-account/service-provider-account.component';
import { ClientAccountComponent } from '../../components/client/client-account/client-account.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule,
 ],
  declarations: [
    TravelAgentAccountComponent,
    ServiceProviderAccountComponent,
    ClientAccountComponent,
  ],
  exports:[
    TravelAgentAccountComponent,
    ServiceProviderAccountComponent,
    ClientAccountComponent
  ]
})
export class UserAccountModule { }
