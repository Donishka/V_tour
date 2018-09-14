import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { TravelAgentService } from '../../../services/user-service/travelAgent/travelagent.service';
import { TravelAgent } from '../../../services/user-service/travelAgent/travelagent.model';

declare var M: any;

@Component({
  selector: 'app-edit-travel-agent',
  templateUrl: './edit-travel-agent.component.html',
  styleUrls: ['./edit-travel-agent.component.css'],
  providers:[TravelAgentService]
})
export class EditTravelAgentComponent implements OnInit {
  user:any;
  constructor(public travelAgentService: TravelAgentService,
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
    this.resetForm();
    this.authService.getProfile().subscribe(res=>{
      this.user = res.data.user;
      console.log(this.user);
    })
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.travelAgentService.selectedTravelAgent = {
      _id:"",
    fname:"",
    lname:"",
    username:"",
    password:"",
    email:"",
    telephone:[""],
    address:"",
    isadmin:false
    }
  }
  onSubmit(form: NgForm) {
    /*if (form.value._id == "") {
      this.travelAgentService.postTravelAgent(form.value).subscribe((res) => {
        console.log("submitpost");
        this.flashMessage.show('Travel Agent Saved', { cssClass: 'alert-success', timeout: 4000 });
        this.resetForm(form);
      });
    }
    else {*/
      this.travelAgentService.putTravelAgent(form.value).subscribe((res) => {
        console.log("submitput");
        this.flashMessage.show('Travel Agent Updated', { cssClass: 'alert-success', timeout: 4000 });
        this.resetForm(form);
      });
    //}
  }

}
