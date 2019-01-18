import { Component, OnInit } from '@angular/core';
import { TravelagentPaymentService } from '../../../../services/sharedata/travelagent-payment.service';
import { ItineraryService} from '../../../../services/itinerary-service/itinerary.service';
@Component({
  selector: 'app-travel-agent-payment',
  templateUrl: './travel-agent-payment.component.html',
  styleUrls: ['./travel-agent-payment.component.css']
})
export class TravelAgentPaymentComponent implements OnInit {


  constructor(
    public travelagentPaymentService: TravelagentPaymentService,
    private itineraryService: ItineraryService,
  ) { }

  data:any;

  ngOnInit() {
    this.itineraryService.getOneItinerry(this.travelagentPaymentService.itenararyid).subscribe((res) => {
      this.data=res;
      console.log(this.data.events[this.travelagentPaymentService.index-1])
    });
  }

}
