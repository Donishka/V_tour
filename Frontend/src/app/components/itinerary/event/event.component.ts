import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ItineraryService } from '../../../services/itinerary-service/itinerary.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],

})
export class EventComponent implements OnInit {

  public evnetForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EventComponent>,
    private eventService: ItineraryService,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.evnetForm = this.formBuilder.group({
      id: [this.data.id],
      price: [this.data.price, [Validators.required]],
      name: [this.data.name, [Validators.required]],
      venue: [this.data.venue, [Validators.required]],
      date_from: [this.data.date_from, [Validators.required]],
      date_to: [this.data.date_to],
      description: [this.data.description],
      sp_id:[this.data.sp_id],
      package_id:[this.data.pkg_id],
      cost:[this.data.cost, [Validators.required]],
      check_in_time:[this.data.check_in_time], // for loading purpose
      duration:[this.data.duration], // for hotel
      travel_category:[this.data.category], // for travel purpose
      depature_time:[this.data.depature_time], // When travel by train
      event_type:[this.data.event_type] // for editing purpose
    });
  }
  onSubmit() {
    if (isNaN(this.data.id)) {
      this.eventService.addEvent(this.evnetForm.value);
      this.dialogRef.close();
    } else {
      this.eventService.editEvent(this.evnetForm.value);
      this.dialogRef.close();
    }
  }

}
