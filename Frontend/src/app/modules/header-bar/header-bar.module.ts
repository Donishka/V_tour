import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from '../../components/header-bar/header-bar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes }  from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule
  ],
  declarations: [
    HeaderBarComponent,
    NavbarComponent
  ],
  exports:[
    HeaderBarComponent,
    NavbarComponent
  ]
})
export class HeaderBarModule { }
