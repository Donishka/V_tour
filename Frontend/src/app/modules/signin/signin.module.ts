import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../../components/profile/profile.component';
import { LoginComponent } from '../../components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileComponent,
    LoginComponent
  ],
  declarations: []
})
export class SigninModule { }
