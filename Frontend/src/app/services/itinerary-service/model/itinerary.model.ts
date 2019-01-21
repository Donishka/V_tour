import { Event } from './event.model';
export class Itinerary {
    _id?:String;
    date_time:String;
    name: String;
    note:String;
    traveAgentName:string;
    events:Event[];
    clientId ?: String;
    totalPrice ?: number;
}
