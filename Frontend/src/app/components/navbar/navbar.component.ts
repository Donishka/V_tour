import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
<<<<<<< HEAD
  user:any ;
  vroute:String = "Profile";
=======
>>>>>>> d3781741f7c18321f7e55de499af5469f249c38b

  constructor(

    private router:Router,
    private authService:AuthService,
    private flashMessage:FlashMessagesService

  ) { }

  ngOnInit() {
<<<<<<< HEAD
    
  }
  

  selectProfile(){ 

    const us = localStorage.getItem("user");
    this.user = JSON.parse(us);
             
      if(this.user.usertype === "client" ){
        this.router.navigate(['/client-account']);
      }
      else if(this.user.usertype === "serviceprovider"){ 
        this.router.navigate(['/service-provider-account']);
      }else if(this.user.usertype === "travelagent"){ 
        this.router.navigate(['/travelagent-account']);
      }
=======
>>>>>>> d3781741f7c18321f7e55de499af5469f249c38b
  }

  logoutUser(){

    this.authService.logoutUser();
    this.router.navigate(['/login']);
    this.flashMessage.show("You are logged out", { cssClass: 'alert-success', timeout: 1000 });

    return false;

  }
}
