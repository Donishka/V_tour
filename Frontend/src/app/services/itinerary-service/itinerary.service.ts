import { Injectable } from '@angular/core';
import { Event } from './model/event.model';



import { HttpClient } from '@angular/common/http';

import { Itinerary } from './model/itinerary.model';

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {

  eventList  : Event[] = [];
  iT: Itinerary[];

  constructor(private http: HttpClient) { }

  addEvent(event: Event){
    event.id = this.eventList.length + 1;
    this.eventList.push(event);
  };

  removeEvent(id: Number){
    const event = this.eventList.findIndex(c => c.id == id);
    this.eventList.splice(event,1);
  }

  getAllEvents(){
    return this.eventList;
  }

  editEvent(event: Event){
    const index = this.eventList.findIndex(c => c.id === event.id);
    this.eventList[index] = event;
  }

  
  selectedItinerary: Itinerary;
  itinerary: Itinerary[];
  type:string;
  
  readonly baseURL = 'http://localhost:4201/itinerary';


  
  postItinerary(itinerary: Itinerary) { 
    return this.http.post(this.baseURL, itinerary);
  }

  getItinerrytList() {
    return this.http.get(this.baseURL);
  }

  // putTravelAgent(itinerary: Itinerary) {
  //   return this.http.put(this.baseURL + `/${itinerary._id}`, itinerary);
  // }

  // deleteTravelAgent(_id: string) {
  //   return this.http.delete(this.baseURL + `/${_id}`);
  // }

}
