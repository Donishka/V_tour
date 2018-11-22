import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes }  from '@angular/router';
import { ProfileComponent } from '../../components/profile/profile.component';
import { LoginComponent } from '../../components/login/login.component';
import { UserAccountModule } from '../user-account/user-account.module';
import { HeaderBarModule } from '../header-bar/header-bar.module';
import {CardModule} from 'primeng/card';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule,
    UserAccountModule,
    HeaderBarModule,
    CardModule,
    DialogModule
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
