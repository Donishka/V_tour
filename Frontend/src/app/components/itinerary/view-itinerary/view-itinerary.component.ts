import { Component, OnInit } from '@angular/core';
import { ItineraryService } from '../../../services/itinerary-service/itinerary.service';
import { Itinerary } from '../../../services/itinerary-service/model/itinerary.model';
import { SharedataService } from '../../../services/sharedata/sharedata.service';

@Component({
  selector: 'app-view-itinerary',
  templateUrl: './view-itinerary.component.html',
  styleUrls: ['./view-itinerary.component.css']
})
export class ViewItineraryComponent implements OnInit {

  itinerary: Itinerary = new Itinerary();
  view:boolean=true;

  constructor(
    public itineraryService: ItineraryService,
    private dataS: SharedataService
    
  ) {
    this.dataS.shareUserData();
    this.dataS.currentMessge.subscribe(traveAgentdata => {
      this.itinerary.traveAgentName = traveAgentdata.username;
      this.refreshServiceProviderList();
    });
    
   }

  ngOnInit() {

  }

  refreshServiceProviderList() {
    this.itineraryService.getItinerrytList(this.itinerary).subscribe((res) => {
      this.itineraryService.iT = res as Itinerary[];
      if(this.itineraryService.iT.length == 0){
        this.view = false;
      }
    });
  }

}
