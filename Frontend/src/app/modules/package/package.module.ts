import { HeaderBarModule } from './../header-bar/header-bar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes } from '@angular/router';
import { AddNewPackageComponent } from '../../components/package/add-new-package/add-new-package.component';
import { ViewPackagesComponent } from '../../components/package/view-packages/view-packages.component';
import { PackageFilterPipe } from '../../components/package/package.filter.pipe';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule,
    HeaderBarModule,
    CardModule,
    DialogModule
    
  ],
  declarations: [AddNewPackageComponent,
                ViewPackagesComponent,
              PackageFilterPipe,
    ],
  exports: [AddNewPackageComponent,
    ViewPackagesComponent,
    PackageFilterPipe]
})
export class PackageModule { }
