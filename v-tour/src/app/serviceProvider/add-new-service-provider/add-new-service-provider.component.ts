import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
 
import { ServiceProviderService } from '../../service/serviceProvider/serviceprovider.service';
import { ServiceProvider } from '../../service/serviceProvider/serviceprovider.model';

declare var M:any;

@Component({
  selector: 'app-add-new-service-provider',
  templateUrl: './add-new-service-provider.component.html',
  styleUrls: ['./add-new-service-provider.component.css'],
  providers:[ServiceProviderService]
})
export class AddNewServiceProviderComponent implements OnInit {


  constructor(public serviceProviderService:ServiceProviderService) { }

  ngOnInit() {
    this.resetForm();
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
}
  
