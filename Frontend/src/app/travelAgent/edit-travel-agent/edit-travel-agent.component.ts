import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TravelAgentService } from '../../service/travelAgent/travelagent.service';
import { TravelAgent } from '../../service/travelAgent/travelagent.model';

declare var M: any;


@Component({
  selector: 'app-edit-travel-agent',
  templateUrl: './edit-travel-agent.component.html',
  styleUrls: ['./edit-travel-agent.component.css'],
  providers:[TravelAgentService]
})
export class EditTravelAgentComponent implements OnInit {

  constructor(public travelAgentService: TravelAgentService) { }

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
        
        this.resetForm(form);
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.travelAgentService.putTravelAgent(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }
}
