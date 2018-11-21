import { Component, OnInit } from '@angular/core';
import { ItineraryService } from '../../../services/itinerary-service/itinerary.service';
import { Itinerary } from '../../../services/itinerary-service/model/itinerary.model';
import { SharedataService } from '../../../services/sharedata/sharedata.service';
import { EditItineraryComponent } from '../edit-itinerary/edit-itinerary.component';
import { ItineraryComponent } from '../itinerary.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-view-itinerary',
  templateUrl: './view-itinerary.component.html',
  styleUrls: ['./view-itinerary.component.css']
})
export class ViewItineraryComponent implements OnInit {

  itinerary: Itinerary = new Itinerary();
  view: boolean = true;
  isPopupOpened = false;
  Itinerary: any;

  constructor(
    public itineraryService: ItineraryService,
    private dataS: SharedataService,
    private dialog?: MatDialog

  ) {
    this.dataS.shareUserData();
    this.dataS.currentMessge.subscribe(traveAgentdata => {
      this.itinerary.traveAgentName = traveAgentdata.username;
      console.log("In view itineraray "+this.itinerary.traveAgentName);
      this.refreshItinerryList();
      
    });
  }

  editItinerary(itinerary: Itinerary) {
    this.isPopupOpened = true;
    this.itineraryService.id = itinerary._id;
    console.log("id " + this.itineraryService.id);
    const dialogRef = this.dialog.open(EditItineraryComponent, {

      data: { id: this.itineraryService.id,
              itineraryName : itinerary.name,
              note: itinerary.note
       }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.isPopupOpened = false;
      this.refreshItinerryList();
    });
    this.itineraryService.eventList = [];

  }
  deleteItinerary(id: String) {
    this.itineraryService.deleteItinerary(id).subscribe(res => {
      alert("Itinerary deleted");
      this.refreshItinerryList();
    })
  }

  ngOnInit() {
    
  }

  refreshItinerryList() {
    console.log ("in referesh data in view titnierty : "+this.itinerary.traveAgentName);
    this.itineraryService.getItinerrytList(this.itinerary).subscribe((res) => {
      this.itineraryService.iT = res as Itinerary[];
      console.log("Array length "+this.itineraryService.iT.length);
      
    });
  }

}
