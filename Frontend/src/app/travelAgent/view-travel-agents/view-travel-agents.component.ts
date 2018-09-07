import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
 
import { TravelAgentService } from '../../service/travelAgent/travelagent.service';
import { TravelAgent } from '../../service/travelAgent/travelagent.model';

declare var M: any;

@Component({
  selector: 'app-view-travel-agents',
  templateUrl: './view-travel-agents.component.html',
  styleUrls: ['./view-travel-agents.component.css'],
  providers: [TravelAgentService]
})
export class ViewTravelAgentsComponent implements OnInit {


  constructor(public travelAgentService:TravelAgentService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshTravelAgentList();
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
        this.refreshTravelAgentList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.travelAgentService.putTravelAgent(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshTravelAgentList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshTravelAgentList() {
    this.travelAgentService.getTravelAgentList().subscribe((res) => {
      this.travelAgentService.tagent = res as TravelAgent[];
    });
  }

  onEdit(tagent: TravelAgent) {
    this.travelAgentService.selectedTravelAgent = tagent;
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.travelAgentService.deleteTravelAgent(_id).subscribe((res) => {
        this.refreshTravelAgentList();
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
}
  
