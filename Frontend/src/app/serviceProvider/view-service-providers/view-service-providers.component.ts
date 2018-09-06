import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
 
import { ServiceProviderService } from '../../service/serviceProvider/serviceprovider.service';
import { ServiceProvider } from '../../service/serviceProvider/serviceprovider.model';

declare var M:any;

@Component({
  selector: 'app-view-service-providers',
  templateUrl: './view-service-providers.component.html',
  styleUrls: ['./view-service-providers.component.css'],
  providers: [ServiceProviderService]
})
export class ViewServiceProvidersComponent implements OnInit {

  constructor(public serviceProviderService:ServiceProviderService) { }

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
    console.log("insideSubmit");
    if (form.value._id == "") {
      console.log("insidePost");
      this.serviceProviderService.postServiceProvider(form.value).subscribe((res) => {        
        this.resetForm(form);
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.serviceProviderService.putServiceProvider(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
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
    console.log("edit");
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.serviceProviderService.deleteServiceProvider(_id).subscribe((res) => {
        this.refreshServiceProviderList();
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
}
  
