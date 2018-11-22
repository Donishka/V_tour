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
      price: [this.data.price,[Validators.required]],
      name:  [this.data.name,[Validators.required]],
      venue:  [this.data.venue,[Validators.required]]
    });
  }
  onSubmit(){
    if(isNaN(this.data.id)){
      this.eventService.addEvent(this.evnetForm.value);
      this.dialogRef.close();
    }else{
      this.eventService.editEvent(this.evnetForm.value);
      this.dialogRef.close();
    }
  }

}
