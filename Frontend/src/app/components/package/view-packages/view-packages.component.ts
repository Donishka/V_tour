import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

import { ServiceProviderService } from '../../../services/user-service/serviceProvider/serviceprovider.service';
import { ServiceProvider } from '../../../services/user-service/serviceProvider/serviceprovider.model';


import { PackageService } from '../../../services/package-service/package.service';
import { Package } from '../../../services/package-service/package.model';

declare var M: any;


@Component({
  selector: 'app-view-packages',
  templateUrl: './view-packages.component.html',
  styleUrls: ['./view-packages.component.css'],
  providers:[PackageService]
})
export class ViewPackagesComponent implements OnInit {
  user:any;
  constructor(public packageService: PackageService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private authService: AuthService,
    public serviceProviderService: ServiceProviderService,
    private zone: NgZone,) { }

  ngOnInit() {
    this.refreshPackageList();
    this.getProfileDetails();
  }


  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.packageService.selectedPackage = {
      _id: "",
      name: "",
      availability: "",
      type: "",
      discription: "",
      price: null,
    }
  }

  resetForm1(form?: NgForm) {
    if (form)
      this.packageService.selectedPackage = {
        _id: "",
        name: "",
        availability: "",
        type: "",
        discription: "",
        price: null,
      }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.packageService.postPackage(form.value).subscribe((res) => {
        this.resetForm1(form);
        this.refreshPackageList();
        this.flashMessage.show('Service Provider Saved', { cssClass: 'alert-success', timeout: 4000 });
      });
    }
    else {
      this.packageService.postPackage(form.value).subscribe((res) => {
        this.resetForm1(form);
        this.refreshPackageList();
        this.flashMessage.show('Service Provider Updated', { cssClass: 'alert-success', timeout: 4000 });
      });
    }
  }

  refreshPackageList() {
    console.log("packages")
    this.packageService.getPackageList().subscribe((res) => {
      this.packageService.package = res as Package[];
      
    });
  }
  onEdit(pkg: Package) {
    this.packageService.selectedPackage = pkg;
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.packageService.deletePackage(_id).subscribe((res) => {
        this.refreshPackageList();
      });
    }
  }

  getProfileDetails() {
    console.log('get details');
    this.authService.getProfile().subscribe(res => {
      this.user = res.data.user;
      console.log(this.user);
    });
  }
}
