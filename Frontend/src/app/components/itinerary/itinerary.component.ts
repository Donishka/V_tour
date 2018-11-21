import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ItineraryService } from '../../services/itinerary-service/itinerary.service';
import { EventComponent } from './event/event.component';
import { Itinerary } from '../../services/itinerary-service/model/itinerary.model';
import { SharedataService } from '../../services/sharedata/sharedata.service';
import { DatePipe } from '@angular/common';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { Event } from '../../services/itinerary-service/model/event.model';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ClientService } from '../../services/user-service/client/client.service';
import { Client } from '../../services/user-service/client/client.model';


@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css'],
  providers: [ClientService]

})
export class ItineraryComponent implements OnInit {

 

  clientCtrl = new FormControl();
  filteredClients: Observable<Client[]>;
  
  
  itinerary: Itinerary = new Itinerary();
  isPopupOpened = false;
  itineraryName: String = "New Itinerary Name";
  note: String = "New note";
  clientId: String = "";
  clients: Client[] = [];
  
  constructor(
    public clientService:ClientService,
    private dataS: SharedataService,
    private dialog?: MatDialog,
    private eventService?: ItineraryService,
    public itineraryService?: ItineraryService,
  ) {
    console.log("In constructor" + this.itineraryName);
    this.filteredClients = this.clientCtrl.valueChanges
      .pipe(
        startWith(''),
        map(client => client ? this._filterStates(client) : this.clients.slice())
      );
  }

  onDrop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.eventService.eventList, event.previousIndex, event.currentIndex);
  }

  private _filterStates(value: string): Client[] {
    const filterValue = value.toLowerCase();

    return this.clients.filter(client => client.fname.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit() {

    this.clientService.getClientList().subscribe((res) => {
      this.clientService.client = res as Client[];
      this.clients = this.clientService.client;
      
    });
   
    console.log("DAte " + this.itineraryService.getDate());
    this.itineraryService.eventList = [];
    this.dataS.shareUserData();
    this.dataS.currentMessge.subscribe(traveAgentdata => {
      this.itinerary.traveAgentName = traveAgentdata.username;
    });
  }
  get EventList() {
    //console.log(JSON.stringify(this.eventService.getAllEvents()));
    return this.eventService.getAllEvents();
  }

  

  getTotalAmount(eventList: Event[]): number {
    var tot = 0;
    for (var i in eventList) {
      tot = tot + eventList[i].price;
    }
    return tot;
  }
  getClientId(){
    console.log("cntrl vl: "+this.clientCtrl.value)

    for(var i in this.clients){
      if(this.clients[i].email == this.clientCtrl.value){
        this.clientId = this.clients[i]._id;
      }
    }

    this.clients
  }

  addEvent() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(EventComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
      // this.items = this.EventList;
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
    this.getClientId();

    console.log("In add itinerary" + this.itineraryName);
    this.itinerary.name = this.itineraryName;
    this.itinerary.note = this.note;
    this.itinerary.date_time = this.itineraryService.getDate();
    this.itinerary.totalPrice = this.getTotalAmount(this.EventList);
    this.itinerary.clientId = this.clientId;
    // this.itinerary.itineraryName = this.eventService;
    this.itinerary.events = this.eventService.getAllEvents();
    this.itineraryService.postItinerary(this.itinerary).subscribe((res) => {

      alert('Itinerary Saved');

      console.log("Saved");

    });
  }


}
