import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { TravelAgentService } from '../../service/travelAgent/travelagent.service';
import { TravelAgent } from '../../service/travelAgent/travelagent.model';

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
    private router:Router) { }

  ngOnInit() {
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
    password:"",
    email:"",
    telephone:[""],
    address:"",
    isadmin:false
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.travelAgentService.postTravelAgent(form.value).subscribe((res) => {
        this.flashMessage.show('Travel Agent Saved', { cssClass: 'alert-success', timeout: 4000 });
        this.resetForm(form);
        console.log("Saved");
      });
    }
    else {
      this.travelAgentService.putTravelAgent(form.value).subscribe((res) => {
        this.resetForm(form);
        this.flashMessage.show('Travel Agent Updated', { cssClass: 'alert-success', timeout: 4000 });
        console.log("Updated");
      });
    }
  }
}