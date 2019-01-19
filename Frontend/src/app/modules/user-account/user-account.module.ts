import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes }  from '@angular/router';

import { TravelAgentAccountComponent } from '../../components/travelAgent/travel-agent-account/travel-agent-account.component';
import { ServiceProviderAccountComponent } from '../../components/serviceProvider/service-provider-account/service-provider-account.component';
import { ClientAccountComponent } from '../../components/client/client-account/client-account.component';
import { HeaderBarModule } from '../header-bar/header-bar.module';
import { PackageModule } from '../../modules/package/package.module';
import { DialogModule } from 'primeng/dialog';
import {CardModule} from 'primeng/card';
import { SharedModule } from './../shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule,
    HeaderBarModule,
    PackageModule,
    DialogModule,
    CardModule,
    HttpClientModule,
    SharedModule,
    NgxSpinnerModule
    
    
 ],
  declarations: [
    TravelAgentAccountComponent,
    ServiceProviderAccountComponent,
    ClientAccountComponent,
    
    
  ],
  exports:[
    TravelAgentAccountComponent,
    ServiceProviderAccountComponent,
    ClientAccountComponent,
    
  ]
})
export class UserAccountModule { }
