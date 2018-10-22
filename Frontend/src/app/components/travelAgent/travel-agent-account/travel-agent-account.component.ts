import { Component, OnInit,NgZone } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';


import { TravelAgentService } from '../../../services/user-service/travelAgent/travelagent.service';
import { TravelAgent } from '../../../services/user-service/travelAgent/travelagent.model';
import { SharedataService } from '../../../services/sharedata/sharedata.service';

declare var M: any;
@Component({
  selector: 'app-travel-agent-account',
  templateUrl: './travel-agent-account.component.html',
  styleUrls: ['./travel-agent-account.component.css'],
  providers: [TravelAgentService]
  
})

export class TravelAgentAccountComponent implements OnInit {
  user: any = {fname:"First name",lname:"Last name"};
  constructor(
    public travelAgentService: TravelAgentService,
    private authService: AuthService,
    private router: Router,
    private zone:NgZone,
    private dataS: SharedataService
    ) { }
    
    ngOnInit() {
      this.dataS.shareUserData();
    this.dataS.currentMessge.subscribe(traveAgentdata => {
      this.user = traveAgentdata;
    });

   // this.getProfileDetails();
    console.log('init');
  }

  getProfileDetails() {
    console.log('get details');
    this.authService.getProfile().subscribe(res => {
      this.user = res.data.user;
      console.log(this.user);
    });
  }
  
}
