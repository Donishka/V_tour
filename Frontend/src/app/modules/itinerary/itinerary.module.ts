import { HeaderBarModule } from './../header-bar/header-bar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventComponent } from '../../components/itinerary/event/event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatDialogModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { ItineraryComponent } from '../../components/itinerary/itinerary.component';
import { ItineraryService } from '../../services/itinerary-service/itinerary.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ViewItineraryComponent } from '../../components/itinerary/view-itinerary/view-itinerary.component';
import { EditItineraryComponent } from '../../components/itinerary/edit-itinerary/edit-itinerary.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DialogModule } from 'primeng/dialog';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA47KAw6KspzlmDSqtmVZodOu212gJwMAw'
    }),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    HeaderBarModule,
    DragDropModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    NgxSpinnerModule,
    DialogModule
  ],
  declarations: [
    EventComponent,
    ItineraryComponent,
    ViewItineraryComponent,
    EditItineraryComponent
  ],
  exports: [
    EventComponent,
    ItineraryComponent,
    ViewItineraryComponent,
    EditItineraryComponent
  ],
  providers: [
    ItineraryService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  entryComponents: [EventComponent]
})
export class ItineraryModule { }
