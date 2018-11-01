import { ClientFilterPipe } from './../../components/client/client-filter.pipe';
import { HeaderBarModule } from './../header-bar/header-bar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes }  from '@angular/router';

import { ViewTravelAgentsComponent } from '../../components/travelAgent/view-travel-agents/view-travel-agents.component';
import { ViewClientsComponent } from '../../components/client/view-clients/view-clients.component';
import { ViewServiceProvidersComponent } from '../../components/serviceProvider/view-service-providers/view-service-providers.component';
import { TravelAgentFilterPipe } from '../../components/travelAgent/travel-agent-filter.pipe';
import { ServiceProviderFilterPipe } from '../../components/serviceProvider/service-provider-filter.pipe';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule,
    HeaderBarModule,
    NgxSmartModalModule.forRoot(),
    DialogModule

 ],
  declarations: [
    ViewTravelAgentsComponent,
    ViewClientsComponent,
    ViewServiceProvidersComponent,
    TravelAgentFilterPipe,
    ServiceProviderFilterPipe,
    ClientFilterPipe
  ],
  exports:[
    ViewTravelAgentsComponent,
    ViewClientsComponent,
    ViewServiceProvidersComponent,
    TravelAgentFilterPipe,
    ServiceProviderFilterPipe,
    ClientFilterPipe
  ]
})
export class ViewUserModule { }
