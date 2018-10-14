import { Injectable } from '@angular/core';
import { Event } from './model/event.model';

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {

  eventList  : Event[] = [];

  constructor() { }

  addEvent(event: Event){
    this.eventList.push(event);
  };

  removeEvent(id: Number){
    const event = this.eventList.findIndex(c => c.id == id);
    this.eventList.splice(event,1);
  }

  getAllEvents(){
    return this.eventList;
  }
}
