import { SharedModule } from './../shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderBarModule } from './../header-bar/header-bar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes }  from '@angular/router';
import { EditTravelAgentComponent } from '../../components/travelAgent/edit-travel-agent/edit-travel-agent.component';
import { EditServiceProviderComponent } from '../../components/serviceProvider/edit-service-provider/edit-service-provider.component';
import { DialogModule } from 'primeng/dialog';
import {CardModule} from 'primeng/card';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule,
    HeaderBarModule,
    DialogModule,
    CardModule,
    HttpClientModule,
    SharedModule,
    PasswordStrengthMeterModule,
    NgxSpinnerModule
 ],
  declarations: [
    EditTravelAgentComponent,
    EditServiceProviderComponent,
    
  ],
  exports:[
    EditTravelAgentComponent,
    EditServiceProviderComponent,
    
  ]
})
export class EditUserModule { }
