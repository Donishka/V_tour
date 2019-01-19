import { SpPackageService } from './../../../services/sharedata/sp-package.service';
import { Package } from './../../../services/package-service/package.model';
import { PackageService } from './../../../services/package-service/package.service';
import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { share } from 'rxjs/operators'
import { NgxSpinnerService } from 'ngx-spinner';
declare var M: any;

@Component({
  selector: 'app-view-packages',
  templateUrl: './view-packages.component.html',
  styleUrls: ['./view-packages.component.css'],
  providers: [Package, PackageService],
})
export class ViewPackagesComponent implements OnInit {
  
  user:any;
  searchKeyword: string;
  type: string;
  spid:string;

  constructor(public packageService: PackageService,
    private flashMessage: FlashMessagesService,
    public pkg: Package,
    private router: Router,
    private spinner: NgxSpinnerService,
    public authService:AuthService,
    public shared: SpPackageService) { }

  ngOnInit() {     
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
    this.getProfileDetails();
    this.refreshPackageList();
    this.spid=this.shared.spid;
  }

  refreshPackageList() {
    this.packageService.getPackageList().subscribe((res) => {
      this.packageService.package = res as Package[];
    });
  }

  getProfileDetails() {
    this.authService.getProfile().subscribe(res => {
      this.user = res.data.user;
    });
  }
}

