import { Component, OnInit } from '@angular/core';
import { ItineraryService } from '../../../services/itinerary-service/itinerary.service';
import { Itinerary } from '../../../services/itinerary-service/model/itinerary.model';

@Component({
  selector: 'app-view-itinerary',
  templateUrl: './view-itinerary.component.html',
  styleUrls: ['./view-itinerary.component.css']
})
export class ViewItineraryComponent implements OnInit {

  constructor(public itineraryService:ItineraryService) { }

  ngOnInit() {
    this.refreshServiceProviderList();

  }

  refreshServiceProviderList() {
    this.itineraryService.getItinerrytList().subscribe((res) => {
      this.itineraryService.iT = res as Itinerary[];
    });
  }

}
