import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ItineraryService } from '../../../services/itinerary-service/itinerary.service';
import { TravelagentPaymentService } from '../../../services/sharedata/travelagent-payment.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],

})
export class EventComponent implements OnInit {

  public eventForm: FormGroup;
  public minimum_date: string;
  public check_in_time = false; // for loading purpose
  public duration = false; // for hotel
  public travel_category = false; // for travel purpose
  public depature_time = false; // When travel by train
  public event_type = false; 

  formType:String = "Custom";

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EventComponent>,
    private eventService: ItineraryService,
    public travelagentPaymentService: TravelagentPaymentService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    

  ) { 
    //this.formType  = this.eventForm.controls['event_type'].value;
   // console.log(this.formType);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  min_date() {
    var min_date;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; 
    var yyyy = today.getFullYear();
    var day = dd.toString();
    var month = mm.toString();
    if (dd < 10) {
      day = '0' + dd;
    }
    if (mm < 10) {
       month = '0'+ mm;
    }
    min_date = yyyy + '-' + month + '-' + day;
    console.log(min_date);
    return min_date;
  }

  ngOnInit() {
    this.minimum_date = this.min_date();
    this.eventForm = this.formBuilder.group({
      id: [this.data.id],
      price: [this.data.price, [Validators.required]],
      name: [this.data.name, [Validators.required]],
      venue: [this.data.venue, [Validators.required]],
      date_from: [this.data.date_from, [Validators.required]],
      date_to: [this.data.date_to],
      description: [this.data.description],
      sp_id: [this.data.sp_id],
      pkg_id: [this.data.pkg_id],
      cost: [this.data.cost, [Validators.required]],
      check_in_time: [this.data.check_in_time], // for loading purpose
      duration: [this.data.duration], // for hotel
      travel_category: [this.data.travel_category], // for travel purpose
      depature_time: [this.data.depature_time], // When travel by train
      event_type: [this.data.event_type], // for editing purpose
      payment_status:"not_paid",
      booking_status:"not_booked",

    });

  }
  onSubmit() {
    if (isNaN(this.data.id)) {
      this.eventService.addEvent(this.eventForm.value);
      console.log(JSON.stringify(this.eventForm.value.id));
      this.dialogRef.close();
    } else {
      this.eventService.editEvent(this.eventForm.value);
      this.dialogRef.close();
    }
  }
  
}
