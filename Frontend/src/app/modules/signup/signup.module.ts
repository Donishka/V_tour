import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewClientsComponent } from '../../components/client/add-new-clients/add-new-clients.component';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule
  ],
  declarations: [
    AddNewClientsComponent
  ],
  exports:[AddNewClientsComponent]
})
export class SignupModule { }
