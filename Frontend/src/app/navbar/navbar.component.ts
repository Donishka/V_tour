import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(

    private router:Router,
    private authService:AuthService,
    private flashMessage:FlashMessagesService

  ) { }

  ngOnInit() {
  }

  logoutUser(){

    this.authService.logoutUser();
    this.router.navigate(['/login']);
    this.flashMessage.show("You are logged out", { cssClass: 'alert-success', timeout: 1000 });

    return false;

  }
}
