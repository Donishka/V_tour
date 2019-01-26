import { AuthService } from './../../../services/auth.service';
import { Component, OnInit, PipeTransform, Pipe   } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { TravelAgentService } from '../../../services/user-service/travelAgent/travelagent.service';
import { TravelAgent } from '../../../services/user-service/travelAgent/travelagent.model';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { NgxSpinnerService } from 'ngx-spinner';

declare var M: any;

@Component({
  selector: 'app-view-travel-agents',
  templateUrl: './view-travel-agents.component.html',
  styleUrls: ['./view-travel-agents.component.css'],
  providers: [TravelAgentService, TravelAgent]
})


export class ViewTravelAgentsComponent implements OnInit {

  searchKeyword:string;
  type:string;
  user:any;
  constructor(public travelAgentService:TravelAgentService,
    private flashMessage:FlashMessagesService,
    public travelAgent: TravelAgent,
    private router:Router,
    private authService:AuthService,
    public ngxSmartModalService: NgxSmartModalService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

    this.getProfileDetails();
    this.resetForm();
    this.refreshTravelAgentList();
  }

  display: boolean = false;

  showDialog() {
    this.display = true;
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
    if (form.value._id == "") {
      this.travelAgentService.postTravelAgent(form.value).subscribe((res) => {
        this.flashMessage.show('Travel Agent Saved', { cssClass: 'alert-success', timeout: 4000 });
        this.refreshTravelAgentList();
        this.resetForm(form);
      });
    }
    else {
      this.travelAgentService.putTravelAgent(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshTravelAgentList();
        this.flashMessage.show('Travel Agent Updated', { cssClass: 'alert-success', timeout: 4000 });
        this.display=false;
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
      });
    }
  }

  getProfileDetails() {
    this.authService.getProfile().subscribe(res => {
      this.user = res.data.user;
      console.log(this.user);
    });
  }
}
  
