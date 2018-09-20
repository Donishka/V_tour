import { Component, OnInit,NgZone } from '@angular/core';
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
  providers: [TravelAgentService]
})
export class EditTravelAgentComponent implements OnInit {
  user: any;
  constructor(public travelAgentService: TravelAgentService,
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private zone:NgZone,
  ) { }

  ngOnInit() {
    this.resetForm();
    this.refreshTravelAgentList();
    this.getProfileDetails();
  }

  getProfileDetails() {
    this.authService.getProfile().subscribe(res => {
      this.user = res.data.user;
      console.log(this.user);
    });
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.travelAgentService.selectedTravelAgent = {
      _id: "",
      fname: "",
      lname: "",
      username: "",
      password: "",
      email: "",
      telephone: [""],
      address: "",
      profilepic:"",
      isadmin: false
    }
  }
  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.travelAgentService.postTravelAgent(form.value).subscribe((res) => {
        console.log("submitpost");
        alert('Details Saved');
        this.resetForm(form);
        this.zone.run(() => {        
        this.router.navigateByUrl('/travelagent-account');
        });
      });
    }else {
      this.travelAgentService.putTravelAgent(form.value).subscribe((res) => {
        console.log("submitput");
        this.resetForm(form);
        alert('Details Updated');
        this.zone.run(() => {
        this.router.navigateByUrl('/travelagent-account');
        });
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
}
