import { Itinerary } from './../../services/itinerary-service/model/itinerary.model';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'ItineraryFilter'
})

export class ItineraryFilterPipe implements PipeTransform {
    transform(itinerarys: Itinerary[], searchKeyword: string, Itinerary: Itinerary): Itinerary[] {
        if (!itinerarys || !searchKeyword) {
            return itinerarys;
        } else {
            return itinerarys.filter(itinerarys =>
                itinerarys.name.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1 ||
                itinerarys.note.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1 ||
                itinerarys.traveAgentName.toString().indexOf(searchKeyword.toString()) !== -1);
        }
    }
}