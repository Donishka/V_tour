import { HttpClient } from '@angular/common/http';
import { Component, OnInit,NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { NgxSpinnerService } from 'ngx-spinner';
import { TravelAgentService } from '../../../services/user-service/travelAgent/travelagent.service';
import { TravelAgent } from '../../../services/user-service/travelAgent/travelagent.model';

declare var M: any;

const URL = 'http://13.232.48.250:4201/travelagents/api/upload';

@Component({
  selector: 'app-edit-travel-agent',
  templateUrl: './edit-travel-agent.component.html',
  styleUrls: ['./edit-travel-agent.component.css'],
  providers: [TravelAgentService]
})
export class EditTravelAgentComponent implements OnInit {
  user: any = {_id:"id"};
  rePassword:any;
  constructor(public travelAgentService: TravelAgentService,
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private zone:NgZone,
    private http:HttpClient,
    private spinner: NgxSpinnerService
  ) { }

  title = 'app';

  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });

  email: String;
  password: String;

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

    this.resetForm();
    this.refreshTravelAgentList();
    this.getProfileDetails();
    this.fileUpload();
  }

  getProfileDetails() {
    this.authService.getProfile().subscribe(res => {
      this.user = res.data.user;
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
      agencyname:"",
      password: "",
      email: "",
      telephone: [""],
      address: "",
      profilepic:"",
      isadmin: false,
    }
  }
  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.travelAgentService.postTravelAgent(form.value).subscribe((res) => {
        alert('Details Saved');
        this.resetForm(form);
        this.getProfileDetails();
        this.zone.run(() => {        
        this.router.navigateByUrl('/travelagent-account');
        });
      });
    }else {
      this.travelAgentService.putTravelAgent(form.value).subscribe((res) => {
        this.resetForm(form);
        alert('Details Updated');
        this.getProfileDetails();
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

  display1: boolean = false;
  showDialog1() {
    this.display1 = true;
  }

  display2: boolean = false;
  showDialog2() {
    this.display2 = true;
  }

  display3: boolean = false;
  showDialog3() {
    this.display3 = true;
  }


  loginUser() {
    const user = {
      email: this.email,
      password: this.password
    }

    this.authService.loginUser(user).subscribe(res => {
      if (res.state) {
        this.showDialog2();
        this.display1=false;
      } else {
        alert(res.msg);
      }
    })
  }

  sendPassword(form: NgForm) {
    if(this.rePassword==form.value.password){
      this.travelAgentService.putTravelAgentPw(form.value).subscribe((res) => {
        alert('Password Updated');
        this.display2 = false;
      });
    }else{
      alert('Passwords Do Not Match !');
    }
  }

  sendProfilePic(){
    this.travelAgentService.putTravelAgentProfilePic(this.user).subscribe((res) => {
    });
  }

  fileUpload(){
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.sendProfilePic();
      this.display3 = false;
      alert('File uploaded successfully');
    };
  }

}
