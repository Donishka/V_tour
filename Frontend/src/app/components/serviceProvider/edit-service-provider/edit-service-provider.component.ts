import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { ServiceProviderService } from '../../../services/user-service/serviceProvider/serviceprovider.service';
import { ServiceProvider } from '../../../services/user-service/serviceProvider/serviceprovider.model';

declare var M: any;

@Component({
  selector: 'app-edit-service-provider',
  templateUrl: './edit-service-provider.component.html',
  styleUrls: ['./edit-service-provider.component.css'],
  providers:[ServiceProviderService]
})
export class EditServiceProviderComponent implements OnInit {
user:any;
  constructor(public serviceProviderService:ServiceProviderService,
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService,
    private zone:NgZone,
  ) { }

  ngOnInit() {
    this.resetForm();
    this.refreshServiceProviderList();
    this.getProfileDetails();
  }

  getProfileDetails() {
    this.authService.getProfile().subscribe(res => {
      this.user = res.data.user;
      console.log(this.user);
    });
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.serviceProviderService.selectedServiceProvider = {
      _id:"",
    fname:"",
    username:"",
    password:"",
    email:"",
    telephone:[null],
    address:"",
    type:"",
    discription:"",
      profilepic: "",
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.serviceProviderService.postServiceProvider(form.value).subscribe((res) => {        
        alert('Details Saved');
        this.resetForm(form);
        this.zone.run(() => {
          this.router.navigateByUrl('/service-provider-account');
        });
      });
    }
    else {
      this.serviceProviderService.putServiceProvider(form.value).subscribe((res) => {
        alert('Details Saved');
        this.resetForm(form);
        this.zone.run(() => {
          this.router.navigateByUrl('/service-provider-account');
        });
      });
    }
  }


  refreshServiceProviderList() {
    this.serviceProviderService.getServiceProviderList().subscribe((res) => {
      this.serviceProviderService.sp = res as ServiceProvider[];
    });
  }

  onEdit(sp: ServiceProvider) {
    this.serviceProviderService.selectedServiceProvider = sp;

  }
}
