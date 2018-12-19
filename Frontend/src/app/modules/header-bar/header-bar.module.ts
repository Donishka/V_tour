import { NavComponent } from './../../components/nav/nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NavWhiteComponent } from './../../components/nav-white/nav-white.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule,
    BsDropdownModule
  ],
  declarations: [
    NavComponent,
    NavWhiteComponent
  ],
  exports: [
    NavComponent,
    NavWhiteComponent
  ]
})
export class HeaderBarModule { }
