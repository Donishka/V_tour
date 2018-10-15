import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ItineraryService } from '../../services/itinerary-service/itinerary.service';
import { EventComponent } from './event/event.component';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css'],
  
})
export class ItineraryComponent implements OnInit {

  isPopupOpened = false;

  constructor(

    private dialog?: MatDialog,
    private eventService?: ItineraryService,
    public itineraryService?: ItineraryService,
  ) { }

  ngOnInit() {
  }

  get EventList(){
    console.log(JSON.stringify(this.eventService.getAllEvents()));
    return this.eventService.getAllEvents();
  }

  addEvent(){
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(EventComponent,{
      data: {}
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.isPopupOpened = false;
    })
  }

  editEvent(id: number){
    this.isPopupOpened = true;
    const event = this.eventService.getAllEvents().find(c => c.id === id );
    const dialogRef = this.dialog.open(EventComponent,{
      data: event
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.isPopupOpened = false;
    })
  }

  deleteEvent(id: number){
    this.eventService.removeEvent(id);
  }

  // save() {
    
  //   this.itineraryService.postItinerary().subscribe((res) => {
        
  //       alert('Itinerary Saved');
  //       console.log("Saved");
        
  //     });
  //}


}
