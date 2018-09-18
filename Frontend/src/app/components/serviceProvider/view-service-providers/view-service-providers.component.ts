import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { ServiceProviderService } from '../../../services/user-service/serviceProvider/serviceprovider.service';
import { ServiceProvider } from '../../../services/user-service/serviceProvider/serviceprovider.model';

declare var M:any;

@Component({
  selector: 'app-view-service-providers',
  templateUrl: './view-service-providers.component.html',
  styleUrls: ['./view-service-providers.component.css'],
  providers: [ServiceProviderService]
})
export class ViewServiceProvidersComponent implements OnInit {

  constructor(public serviceProviderService:ServiceProviderService,
    private flashMessage:FlashMessagesService,
    private router:Router) { }

  ngOnInit() {
    this.resetForm();
    this.refreshServiceProviderList();
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
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.serviceProviderService.postServiceProvider(form.value).subscribe((res) => {        
        this.resetForm(form);
        this.refreshServiceProviderList();
        this.flashMessage.show('Service Provider Saved', { cssClass: 'alert-success', timeout: 4000 });
      });
    }
    else {
      this.serviceProviderService.putServiceProvider(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshServiceProviderList();
        this.flashMessage.show('Service Provider Updated', { cssClass: 'alert-success', timeout: 4000 });
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

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.serviceProviderService.deleteServiceProvider(_id).subscribe((res) => {
        this.refreshServiceProviderList();
      });
    }
  }
}
  
