import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes }  from '@angular/router';

import { ViewTravelAgentsComponent } from '../../components/travelAgent/view-travel-agents/view-travel-agents.component';
import { ViewClientsComponent } from '../../components/client/view-clients/view-clients.component';
import { ViewServiceProvidersComponent } from '../../components/serviceProvider/view-service-providers/view-service-providers.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule,
 ],
  declarations: [
    ViewTravelAgentsComponent,
    ViewClientsComponent,
    ViewServiceProvidersComponent
  ],
  exports:[
    ViewTravelAgentsComponent,
    ViewClientsComponent,
    ViewServiceProvidersComponent
  ]
})
export class ViewUserModule { }
