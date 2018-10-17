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

  traveAgentdata: any;

  itinerary: Itinerary = new Itinerary();

  constructor(public itineraryService: ItineraryService,
    private dataS: SharedataService, ) { }

  ngOnInit() {
    this.dataS.currentMessge.subscribe(traveAgentdata => {
      this.traveAgentdata = traveAgentdata;
    });
    
    this.itinerary.traveAgentName = this.traveAgentdata.username;
    this.refreshServiceProviderList();

  }

  refreshServiceProviderList() {
    this.itineraryService.getItinerrytList(this.itinerary).subscribe((res) => {
      this.itineraryService.iT = res as Itinerary[];
    });
  }

}
