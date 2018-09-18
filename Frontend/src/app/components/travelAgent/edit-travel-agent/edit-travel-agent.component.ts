<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit,NgZone } from '@angular/core';
>>>>>>> d3781741f7c18321f7e55de499af5469f249c38b
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

<<<<<<< HEAD
=======

>>>>>>> d3781741f7c18321f7e55de499af5469f249c38b
import { TravelAgentService } from '../../../services/user-service/travelAgent/travelagent.service';
import { TravelAgent } from '../../../services/user-service/travelAgent/travelagent.model';

declare var M: any;

@Component({
  selector: 'app-edit-travel-agent',
  templateUrl: './edit-travel-agent.component.html',
  styleUrls: ['./edit-travel-agent.component.css'],
<<<<<<< HEAD
  providers:[TravelAgentService]
})
export class EditTravelAgentComponent implements OnInit {
  user:any;
  constructor(public travelAgentService: TravelAgentService,
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService
=======
  providers: [TravelAgentService]
})
export class EditTravelAgentComponent implements OnInit {
  user: any;
  constructor(public travelAgentService: TravelAgentService,
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private zone:NgZone,
>>>>>>> d3781741f7c18321f7e55de499af5469f249c38b
  ) { }

  ngOnInit() {
    this.resetForm();
<<<<<<< HEAD
    this.authService.getProfile().subscribe(res=>{
      this.user = res.data.user;
      console.log(this.user);
    })
=======
    this.refreshTravelAgentList();
    this.getProfileDetails();
  }

  getProfileDetails() {
    this.authService.getProfile().subscribe(res => {
      this.user = res.data.user;
      console.log(this.user);
    });
>>>>>>> d3781741f7c18321f7e55de499af5469f249c38b
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.travelAgentService.selectedTravelAgent = {
<<<<<<< HEAD
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

=======
      _id: "",
      fname: "",
      lname: "",
      username: "",
      password: "",
      email: "",
      telephone: [""],
      address: "",
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
>>>>>>> d3781741f7c18321f7e55de499af5469f249c38b
}
