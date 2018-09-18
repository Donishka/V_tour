<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-provider-account',
  templateUrl: './service-provider-account.component.html',
  styleUrls: ['./service-provider-account.component.css']
=======
import { Component, OnInit,NgZone } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

import { ServiceProviderService } from '../../../services/user-service/serviceProvider/serviceprovider.service';
import { ServiceProvider } from '../../../services/user-service/serviceProvider/serviceprovider.model';

@Component({
  selector: 'app-service-provider-account',
  templateUrl: './service-provider-account.component.html',
  styleUrls: ['./service-provider-account.component.css'],
  providers:[ServiceProviderService]
>>>>>>> d3781741f7c18321f7e55de499af5469f249c38b
})
export class ServiceProviderAccountComponent implements OnInit {

  user:any;
  constructor(
    private authService:AuthService,
<<<<<<< HEAD
    private router:Router
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(res=>{
      this.user = res.data.user;
      console.log(this.user);

    })
=======
    private router:Router,
    public serviceProviderService:ServiceProviderService,
    private zone:NgZone,
  ) { }

  ngOnInit() {
    this.getProfileDetails();
    console.log('init');
  }

  getProfileDetails() {
    console.log('get details');
    this.authService.getProfile().subscribe(res => {
      this.user = res.data.user;
      console.log(this.user);
    });
>>>>>>> d3781741f7c18321f7e55de499af5469f249c38b
  }

}
