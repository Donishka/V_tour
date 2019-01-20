import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-nav-white',
  templateUrl: './nav-white.component.html',
  styleUrls: ['./nav-white.component.css']
})
export class NavWhiteComponent implements OnInit {
  user: any = {usertype: "usertype" };
  vroute: String = 'Profile';

  constructor(

    private router: Router,
    public authService: AuthService,
    private flashMessage: FlashMessagesService

  ) { }

  ngOnInit() {
    this.getProfileDetails();
  }
  selectProfile() {

    const us = localStorage.getItem("user");
    this.user = JSON.parse(us);

    if (this.user.usertype === "client") {
      this.router.navigate(['/client-account']);
    }
    else if (this.user.usertype === "serviceprovider") {
      this.router.navigate(['/service-provider-account']);
    } else if (this.user.usertype === "travelagent") {
      this.router.navigate(['/travelagent-account']);
    }
  }

  logoutUser() {

    this.authService.logoutUser();
    this.router.navigate(['/login']);
    this.flashMessage.show("You are logged out", { cssClass: 'alert-success', timeout: 1000 });

    return false;

  }
  getProfileDetails() {
    console.log('get details');
    this.authService.getProfile().subscribe(res => {
      this.user = res.data.user;
    });
  }

}
