import { HeaderBarModule } from './../header-bar/header-bar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes } from '@angular/router';
import { AddNewPackageComponent } from '../../components/package/add-new-package/add-new-package.component';
import { ViewPackagesComponent } from '../../components/package/view-packages/view-packages.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule,
    HeaderBarModule
    
  ],
  declarations: [AddNewPackageComponent,
                ViewPackagesComponent],
  exports: [AddNewPackageComponent,
    ViewPackagesComponent]
})
export class PackageModule { }
