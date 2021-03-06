import { Component, OnInit, Inject } from '@angular/core';
import { ItineraryService } from '../../../services/itinerary-service/itinerary.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventComponent } from '../event/event.component';
import { SharedataService } from '../../../services/sharedata/sharedata.service';
import { Itinerary } from '../../../services/itinerary-service/model/itinerary.model';
import { Event } from '../../../services/itinerary-service/model/event.model';
import { ViewItineraryComponent } from '../view-itinerary/view-itinerary.component'
import { Jsonp } from '@angular/http';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';




@Component({
  selector: 'app-edit-itinerary',
  templateUrl: './edit-itinerary.component.html',
  styleUrls: ['./edit-itinerary.component.css']
})
export class EditItineraryComponent implements OnInit {

  note: String = "Client Name";
  itineraryName: String = "Itinerary Name";
  id: String;
  Itinerary: any;
  events: Event[];
  itinerary: Itinerary = new Itinerary();
  isPopupOpened = false;
  public evnetForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dataS: SharedataService,
    private dialogRef: MatDialogRef<EditItineraryComponent>,
    private dialog?: MatDialog,
    public itineraryService?: ItineraryService,
  ) { }

  onDrop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.itineraryService.eventList, event.previousIndex, event.currentIndex);
  }

  ngOnInit() {
    this.dataS.shareUserData();
    this.dataS.currentMessge.subscribe(traveAgentdata => {
      this.itinerary.traveAgentName = traveAgentdata.username;
    });
    this.id = this.data.id;
    this.itineraryName = this.data.itineraryName;
    this.note = this.data.note;
    this.editItinerary(this.id);
    console.log("Id of ininerty" + this.id);

  }


  get EventList() {
    //console.log(JSON.stringify(this.eventService.getAllEvents()));
    return this.itineraryService.getAllEvents();
  }

  editItinerary(id: String) {
    this.itineraryService.getOneItinerry(id).subscribe(res => {
      this.Itinerary = res;
      this.events = this.Itinerary.events;
      //console.log("events"+JSON.stringify(this.events));
      for (var i in this.events) {
        this.evnetForm = this.formBuilder.group({
          id: [this.events[i].id],
          price: [this.events[i].price, [Validators.required]],
          name: [this.events[i].name, [Validators.required]],
          venue: [this.events[i].venue, [Validators.required]],
          date_from: [this.events[i].date_from, [Validators.required]],
          date_to: [this.events[i].date_to],
          description: [this.events[i].description],
          sp_id: [this.events[i].sp_id],
          pkg_id: [this.events[i].pkg_id],
          lng: [this.events[i].lng],
          lat: [this.events[i].lat],
          intime: [this.events[i].intime],
          outtime: [this.events[i].outtime],
          cost: [this.events[i].cost, [Validators.required]],
          check_in_time: [this.events[i].check_in_time], // for loading purpose
          duration: [this.events[i].duration], // for hotel
          travel_category: [this.events[i].travel_category], // for travel purpose
          depature_time: [this.events[i].depature_time], // When travel by train
          event_type: [this.events[i].event_type], // for editing purpose
          payment_status: [this.events[i].payment_status],
          booking_status: [this.events[i].booking_status],
        });

        this.itineraryService.addEvent(this.evnetForm.value);
      }
    });

  }

  getTotalAmount(eventList: Event[]): number {
    var tot = 0;
    for (var i in eventList) {
      tot = tot + eventList[i].price;
      console.log("Total price in edit itinerary mood: " + tot);
    }
    return tot;
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
    const event = this.itineraryService.getAllEvents().find(c => c.id === id);
    console.log(event);
    const dialogRef = this.dialog.open(EventComponent, {
      data: event
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;

    })
  }

  deleteEvent(id: number) {
    this.itineraryService.removeEvent(id);
  }

  addItinerary() {

    this.itinerary.date_time = this.itineraryService.getDate();
    this.itinerary.name = this.itineraryName;
    this.itinerary.note = this.note;
    this.itinerary._id = this.id;
    this.itinerary.events = this.itineraryService.getAllEvents();
    this.itinerary.totalPrice = this.getTotalAmount(this.EventList);
    console.log("add itineray total cost: " + this.itinerary.totalPrice);
    this.itineraryService.putItinerry(this.itinerary).subscribe((res) => {

      alert('Itinerary Updated');

      console.log("Saved");
      this.dialogRef.close();


    });
  }

}
