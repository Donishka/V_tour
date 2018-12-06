import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ServiceProviderService } from '../../../services/user-service/serviceProvider/serviceprovider.service';
import { ServiceProvider } from '../../../services/user-service/serviceProvider/serviceprovider.model';

declare var M:any;

@Component({
  selector: 'app-add-new-service-provider',
  templateUrl: './add-new-service-provider.component.html',
  styleUrls: ['./add-new-service-provider.component.css'],
  providers:[ServiceProviderService]
})
export class AddNewServiceProviderComponent implements OnInit {


  constructor(public serviceProviderService:ServiceProviderService,
    private flashMessage:FlashMessagesService,
    private router:Router) { }

    rePassword:any;
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
    profilepic: "",
    }
  }

  onSubmit(form: NgForm) {
    if(this.rePassword==form.value.password){
      if (form.value._id == "") {
        this.serviceProviderService.postServiceProvider(form.value).subscribe((res:any) => {
          if (res.state == false) {
            alert(res.msg);
          } else {
            this.resetForm(form);
            this.flashMessage.show('Service Provider Saved', { cssClass: 'alert-success', timeout: 4000 });
            alert('Service Provider Saved');
            this.router.navigateByUrl('/travelagent-account');
          }
        });
      }else {
        this.serviceProviderService.putServiceProvider(form.value).subscribe((res) => {
          this.resetForm(form);
          this.flashMessage.show('Service Provider Updated', { cssClass: 'alert-success', timeout: 4000 });
          alert('Service Provider Updates');
          this.router.navigateByUrl('/travelagent-account');
        });
      }
    }else{
      alert("Passwords Do Not Match !");
    }    
  }
}
  
