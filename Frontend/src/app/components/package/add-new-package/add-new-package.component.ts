import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

import { ServiceProviderService } from '../../../services/user-service/serviceProvider/serviceprovider.service';
import { ServiceProvider } from '../../../services/user-service/serviceProvider/serviceprovider.model';


import { PackageService } from '../../../services/package-service/package.service';
import { Package } from '../../../services/package-service/package.model';

@Component({
  selector: 'app-add-new-package',
  templateUrl: './add-new-package.component.html',
  styleUrls: ['./add-new-package.component.css'],
  providers:[PackageService,
            ServiceProviderService]
})
export class AddNewPackageComponent implements OnInit {
  user : any;
  constructor(public packageService: PackageService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private authService:AuthService,
    public serviceProviderService: ServiceProviderService,
    private zone: NgZone,
) { }

  ngOnInit() {
    this.refreshPackageList();
    this.resetForm();
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
      spid: "",
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
      spid:"",
    }
  }
/*
  onSubmit(form: NgForm) {
      this.packageService.postPackage(form.value).subscribe((res) => {
        this.flashMessage.show('Package Saved', { cssClass: 'alert-success', timeout: 4000 });
        this.resetForm1(form);
        alert('Package Saved');
        console.log("Saved");     
      });
  }*/
  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.packageService.postPackage(form.value).subscribe((res) => {
        this.resetForm1(form);
        this.refreshPackageList();
        this.flashMessage.show('Package  Saved', { cssClass: 'alert-success', timeout: 4000 });
      });
    }
    else {
      this.packageService.putPackage(form.value).subscribe((res) => {
        this.resetForm1(form);
        this.refreshPackageList();
        this.flashMessage.show('Package Updated', { cssClass: 'alert-success', timeout: 4000 });
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
