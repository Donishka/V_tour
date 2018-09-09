import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-provider-account',
  templateUrl: './service-provider-account.component.html',
  styleUrls: ['./service-provider-account.component.css']
})
export class ServiceProviderAccountComponent implements OnInit {

  user:any;
  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(res=>{
      this.user = res.data.user;
      console.log(this.user);

    })
  }

}
