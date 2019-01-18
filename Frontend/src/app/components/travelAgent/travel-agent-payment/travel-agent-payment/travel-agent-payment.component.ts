import { Component, OnInit } from '@angular/core';
import { TravelagentPaymentService } from '../../../../services/sharedata/travelagent-payment.service';

@Component({
  selector: 'app-travel-agent-payment',
  templateUrl: './travel-agent-payment.component.html',
  styleUrls: ['./travel-agent-payment.component.css']
})
export class TravelAgentPaymentComponent implements OnInit {

  constructor(
    public travelagentPaymentService: TravelagentPaymentService
  ) { }

  ngOnInit() {
  }

}
