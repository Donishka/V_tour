import { Package } from './../../../services/package-service/package.model';
import { PackageService } from './../../../services/package-service/package.service';
import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

declare var M: any;

@Component({
  selector: 'app-view-packages',
  templateUrl: './view-packages.component.html',
  styleUrls: ['./view-packages.component.css'],
  providers:[Package,PackageService],
})
export class ViewPackagesComponent implements OnInit {
  user:any;
  searchKeyword: string;
  type: string;
  constructor(public packageService: PackageService,
    private flashMessage: FlashMessagesService,
    public pkg: Package,
    private router: Router,
    public authService:AuthService) { }

  ngOnInit() {
    this.refreshPackageList();
  }



  refreshPackageList() {
    this.packageService.getPackageList().subscribe((res) => {
      this.packageService.package = res as Package[];
    });
  }
  getProfileDetails() {
    console.log('get details');
    this.authService.getProfile().subscribe(res => {
      this.user = res.data.user;
      console.log(this.user);
    });
  }
}

