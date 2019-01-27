import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ItineraryService } from '../../../services/itinerary-service/itinerary.service';
import { TravelAgentService } from '../../../services/user-service/travelAgent/travelagent.service';
import { TravelAgent } from '../../../services/user-service/travelAgent/travelagent.model';
import { SharedataService } from '../../../services/sharedata/sharedata.service';
import { Itinerary } from '../../../services/itinerary-service/model/itinerary.model';

declare var M: any;
@Component({
  selector: 'app-travel-agent-account',
  templateUrl: './travel-agent-account.component.html',
  styleUrls: ['./travel-agent-account.component.css'],
  providers: [TravelAgentService]

})

export class TravelAgentAccountComponent implements OnInit {
  itinerary: Itinerary = new Itinerary();
  user: any = { fname: "First name", lname: "Last name", usertype:"travelagent" };
  constructor(
    public itineraryService: ItineraryService,
    public travelAgentService: TravelAgentService,
    private authService: AuthService,
    private router: Router,
    private zone: NgZone,
    private dataS: SharedataService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {

    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);

    this.refreshTravelAgentList();
    this.getProfileDetails();
    this.dataS.shareUserData();
    this.dataS.currentMessge.subscribe(traveAgentdata => {
      this.user = traveAgentdata;
      this.itinerary.traveAgentName = traveAgentdata.username;
      this.refreshItinerryList();
      console.log("user in account "+JSON.stringify(this.user));
    });
  }

  refreshTravelAgentList() {
    this.travelAgentService.getTravelAgentList().subscribe((res) => {
      this.travelAgentService.tagent = res as TravelAgent[];
    });
  }

  getDetails(_id:string){
    this.travelAgentService.getTravelAgent(_id).subscribe((res:any)=>{
      this.user=res;
    })
  }
  refreshItinerryList() {
    this.itineraryService.getItinerrytList(this.itinerary).subscribe((res) => {
      this.itineraryService.iT = res as Itinerary[];
      // if (this.itineraryService.iT.length == 0) {
      //   this.view = false;
      // }
    });
  }

  getProfileDetails() {
    this.authService.getProfile().subscribe(res => {
      this.user = res.data.user;
      this.getDetails(this.user._id);
    });
  }
}
