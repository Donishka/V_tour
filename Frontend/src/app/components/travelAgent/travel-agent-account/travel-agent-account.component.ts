import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel-agent-account',
  templateUrl: './travel-agent-account.component.html',
  styleUrls: ['./travel-agent-account.component.css']
})
export class TravelAgentAccountComponent implements OnInit {
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
