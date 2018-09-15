import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes }  from '@angular/router';
import { ProfileComponent } from '../../components/profile/profile.component';
import { LoginComponent } from '../../components/login/login.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule,
 ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  exports: [
    ProfileComponent,
    LoginComponent
  ]
})
export class SigninModule { }
