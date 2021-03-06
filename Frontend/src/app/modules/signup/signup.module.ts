import { HeaderBarModule } from './../header-bar/header-bar.module';
import { NgModule } from '@angular/core';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes }  from '@angular/router';
import { AddNewClientsComponent } from '../../components/client/add-new-clients/add-new-clients.component';
import { AddNewTravelAgentComponent } from '../../components/travelAgent/add-new-travel-agent/add-new-travel-agent.component';
import { AddNewServiceProviderComponent } from '../../components/serviceProvider/add-new-service-provider/add-new-service-provider.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule,
    HeaderBarModule,
    PasswordStrengthMeterModule,
    NgxSpinnerModule
  ],
  declarations: [
    AddNewClientsComponent,
    AddNewServiceProviderComponent,
    AddNewTravelAgentComponent
  ],
  exports:[
    AddNewClientsComponent,
    AddNewServiceProviderComponent,
    AddNewTravelAgentComponent
  ]
})
export class SignupModule { }
