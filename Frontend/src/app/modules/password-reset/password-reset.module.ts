import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarModule } from './../header-bar/header-bar.module';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes } from '@angular/router';
import { PasswordResetComponent } from '../../components/password-reset/password-reset.component';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { NewPasswordComponent } from '../../components/password-reset/new-password/new-password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule,
    HeaderBarModule,
    DialogModule,
    CardModule
  ],
  declarations: [
    PasswordResetComponent,
    NewPasswordComponent
  ],
  exports: [
    PasswordResetComponent
  ]
})
export class PasswordResetModule { }
