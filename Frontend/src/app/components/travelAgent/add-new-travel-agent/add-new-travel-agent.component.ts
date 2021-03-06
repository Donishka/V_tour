import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { TravelAgentService } from '../../../services/user-service/travelAgent/travelagent.service';
import { TravelAgent } from '../../../services/user-service/travelAgent/travelagent.model';

declare var M: any;


@Component({
  selector: 'app-add-new-travel-agent',
  templateUrl: './add-new-travel-agent.component.html',
  styleUrls: ['./add-new-travel-agent.component.css'],
  providers:[TravelAgentService]
})
export class AddNewTravelAgentComponent implements OnInit {
  constructor(public travelAgentService: TravelAgentService,
    private flashMessage:FlashMessagesService,
    private router:Router,
    private spinner: NgxSpinnerService) { }
  
  
    rePassword: any;
  ngOnInit() {

    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
    
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.travelAgentService.selectedTravelAgent = {
      _id:"",
    fname:"",
    lname:"",
    username:"",
    agencyname:"",
    password:"",
    email:"",
    telephone:[""],
    address:"",
    profilepic:"",
    isadmin:false,
    }
  }

  onSubmit(form: NgForm) {
    if(this.rePassword==form.value.password){
        if (form.value._id == "") {
            this.travelAgentService.postTravelAgent(form.value).subscribe((res:any) => {
              if(res.state==false){
                alert(res.msg);
              }else{
                alert('Travel Agent Saved');
                this.resetForm(form);
                this.router.navigateByUrl('/travelagent-account');
              }               
            });
        }
        else {
            this.travelAgentService.putTravelAgent(form.value).subscribe((res:any) => {
              alert('Travel Agent Updated');
                this.resetForm(form);
                this.router.navigateByUrl('/travelagent-account');
            });
        }
    }else{
      alert("Passwords Do Not Match");
    }
  }
}