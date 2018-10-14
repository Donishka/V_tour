import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ItineraryService } from '../../services/itinerary-service/itinerary.service';
import { EventComponent } from './event/event.component';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css']
})
export class ItineraryComponent implements OnInit {

  isPopupOpened = false;

  constructor(

    private dialog?: MatDialog,
    private eventService?: ItineraryService
  ) { }

  ngOnInit() {
  }

  get EventList(){
    return this.eventService.getAllEvents();
  }

  addEvent(){
    this.isPopupOpened = false;
    const dialogRef = this.dialog.open(EventComponent,{
      data: {}
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.isPopupOpened = false;
    })
  }


}
