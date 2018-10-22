import { Component, OnInit, Inject } from '@angular/core';
import { ItineraryService } from '../../../services/itinerary-service/itinerary.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { EventComponent } from '../event/event.component';
import { SharedataService } from '../../../services/sharedata/sharedata.service';
import { Itinerary } from '../../../services/itinerary-service/model/itinerary.model';
import { Event } from '../../../services/itinerary-service/model/event.model';
import { Jsonp } from '@angular/http';




@Component({
  selector: 'app-edit-itinerary',
  templateUrl: './edit-itinerary.component.html',
  styleUrls: ['./edit-itinerary.component.css']
})
export class EditItineraryComponent implements OnInit {


  // id:String;
  // Itinerary: any;
  // events: any;
  // isPopupOpened = false;

  // constructor(
  //   public itineraryService: ItineraryService,
  //   private dialog: MatDialog,
  //   @Inject(MAT_DIALOG_DATA) public data: any
  // ) { 

  // }

  // ngOnInit() {
  //   this.id = this.data.id;
  //   this.editItinerary(this.id);
  // }

  // editItinerary(id:String){
  //   this.itineraryService.getOneItinerry(id).subscribe(res =>{
  //     this.Itinerary = res;
  //     this.events= this.Itinerary.events;
  //  })
  // }


  // get EventList(){
  //   //console.log(JSON.stringify(this.eventService.getAllEvents()));
  //   return this.itineraryService.getAllEvents();
  // }

  // addEvent(){
  //   this.isPopupOpened = true;
  //   const dialogRef = this.dialog.open(EventComponent,{
  //     data: {}
  //   });
  //   dialogRef.afterClosed().subscribe(result=>{
  //     this.isPopupOpened = false;
  //   })
  // }

  // editEvent(id: number){
  //   this.isPopupOpened = true;
  //   const event = this.itineraryService.getAllEvents().find(c => c.id === id );
  //   console.log(event);
  //   const dialogRef = this.dialog.open(EventComponent,{
  //     data: event
  //   });
  //   dialogRef.afterClosed().subscribe(result=>{
  //     this.isPopupOpened = false;
  //   })
  // }

  // deleteEvent(id: number){
  //   this.itineraryService.removeEvent(id);
  // }


  id: String;
  Itinerary: any;
  events: Event;
  itinerary: Itinerary = new Itinerary();
  isPopupOpened = false;
  newEvent:Event = new Event();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,

    private dataS: SharedataService,
    private dialog?: MatDialog,
    private eventService?: ItineraryService,
    public itineraryService?: ItineraryService,
  ) { }

  ngOnInit() {
    this.dataS.shareUserData();
    this.dataS.currentMessge.subscribe(traveAgentdata => {
      this.itinerary.traveAgentName = traveAgentdata.username;
    });
    this.id = this.data.id;
    this.editItinerary(this.id);
    

  }
  
  get EventList() {
    //console.log(JSON.stringify(this.eventService.getAllEvents()));
    return this.eventService.getAllEvents();
  }
  
  editItinerary(id: String) {
    this.itineraryService.getOneItinerry(id).subscribe(res => {
      this.Itinerary = res;
      this.events = this.Itinerary.events;
      //console.log("events"+JSON.stringify(this.events));
      for(var i in this.events){
       // console.log("mk\n"+JSON.stringify(this.events[i]));
       // console.log("sdfsdfsdfsdfsdfsdfsf "+this.events[i].name);
         this.newEvent.id = this.events[i].id;
         this.newEvent.name = this.events[i].name;
         this.newEvent.position = this.events[i].position;
         this.newEvent.venue = this.events[i].venue;
         console.log("Event array\n"+JSON.stringify(this.newEvent));
         this.eventService.addEvent(this.newEvent);
      }
    })
  }

  addEvent() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(EventComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    })
  }

  editEvent(id: number) {
    this.isPopupOpened = true;
    const event = this.eventService.getAllEvents().find(c => c.id === id);
    console.log(event);
    const dialogRef = this.dialog.open(EventComponent, {
      data: event
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    })
  }

  deleteEvent(id: number) {
    this.eventService.removeEvent(id);
  }

  addItinerary() {

    this.itinerary.events = this.eventService.getAllEvents();
    this.itineraryService.postItinerary(this.itinerary).subscribe((res) => {

      alert('Itinerary Saved');

      console.log("Saved");

    });
  }

}
