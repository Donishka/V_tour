import { Component, OnInit } from '@angular/core';

import { ItineraryService } from '../../../services/itinerary-service/itinerary.service';
import { Itinerary } from '../../../services/itinerary-service/model/itinerary.model';
import { SharedataService } from '../../../services/sharedata/sharedata.service';
import { EditItineraryComponent } from '../edit-itinerary/edit-itinerary.component';
import { ItineraryComponent } from '../itinerary.component';
import { TravelagentPaymentService } from '../../../services/sharedata/travelagent-payment.service';
import { ServiceProviderService} from '../../../services/user-service/serviceProvider/serviceprovider.service'
import { PackageService } from './../../../services/package-service/package.service';

import { MatDialog } from '@angular/material';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas'; 
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-itinerary',
  templateUrl: './view-itinerary.component.html',
  styleUrls: ['./view-itinerary.component.css'],
  providers: [ServiceProviderService,PackageService]
})
export class ViewItineraryComponent implements OnInit {

  itinerary: Itinerary = new Itinerary();
  view: boolean = true;
  isPopupOpened = false;
  Itinerary: any;
  message:any;
  data: any;
  user: any;
  package: any;
  event: any;
  sp: any;
  spid: any;
  mail:any;
  paymentdata:any;
  searchKeyword: string;

  lat: number = 6.978554010342724;
  lng: number = 79.96221732040647;

  positions:any[]=[];

  constructor(
    public itineraryService: ItineraryService,
    private dataS: SharedataService,
    public travelagentPaymentService: TravelagentPaymentService,
    private serviceProviderService: ServiceProviderService,
    private packageService:PackageService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private dialog?: MatDialog

  ) {
    this.dataS.shareUserData();
    this.dataS.currentMessge.subscribe(traveAgentdata => {
      this.itinerary.traveAgentName = traveAgentdata.username;
      this.refreshItinerryList();
    });
  }

  map(tourm:Itinerary){
    this.positions = [];
    for(var i in tourm.events){
      this.positions[i] = {name: tourm.events[i].venue, lat: tourm.events[i].lat, lng: tourm.events[i].lng };
    }
    this.display = true;
    console.log(JSON.stringify(this.positions));
  }

  editItinerary(itinerary: Itinerary) {
    this.isPopupOpened = true;
    this.itineraryService.id = itinerary._id;
    console.log("id " + this.itineraryService.id);
    const dialogRef = this.dialog.open(EditItineraryComponent, {
      data: { id: this.itineraryService.id,
              itineraryName : itinerary.name,
              note: itinerary.note,
              clientId: itinerary.clientId
       }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.isPopupOpened = false;
      this.refreshItinerryList();
    });
    this.itineraryService.eventList = [];
  }

  deleteItinerary(id: String) {
    if (confirm("Delete Itinerary ?")){
      this.itineraryService.deleteItinerary(id).subscribe(res => {
        this.refreshItinerryList();
      })
      this.closePDialog(false);
    }
  }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

  }

  refreshItinerryList() {
    this.itineraryService.getItinerrytList(this.itinerary).subscribe((res) => {
      this.itineraryService.iT = res as Itinerary[];
      // if (this.itineraryService.iT.length == 0) {
      //   this.view = false;
      // }
    });
  }
  public generatePDF(name:string) {
    var data1 = document.getElementById('contentToConvert1');
    var data2 = document.getElementById('contentToConvert2');
    var data3 = document.getElementById('contentToConvert3');
    var data4 = document.getElementById('contentToConvert4');
    html2canvas(data1,data2,data3,data4).then(canvas => {
      // Few necessary setting options 
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF 
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save(name+'.pdf'); // Generated PDF  
    });
  } 

  makePayment(Itenararyid:string,eventIndex:number,eventId:string){
    if (confirm("Proceed to Payment ?")){
      this.paymentdata = { Itenararyid, eventIndex, eventId }
      this.itineraryService.changePaymentStatus(this.paymentdata).subscribe((res) => {
      })
      this.travelagentPaymentService.itenararyid = Itenararyid;
      this.travelagentPaymentService.index = eventIndex;
      this.router.navigateByUrl('/travel-agent-payment');
    }
  }
  display2: boolean = false;
  display1: boolean = false;
  display: boolean = false;

  closePDialog(event:boolean){
    this.display2 = event;
  }

  makeBooking(Itenararyid: string, eventIndex: number) {
    this.travelagentPaymentService.itenararyid = Itenararyid;
    this.travelagentPaymentService.index = eventIndex;

    this.itineraryService.getOneItinerry(this.travelagentPaymentService.itenararyid).subscribe((res) => {
      this.data = res;
      this.event = this.data.events[this.travelagentPaymentService.index - 1];
      this.spid = this.event.sp_id;
      
      this.serviceProviderService.get1ServiceProvider(this.spid).subscribe((res:any) => {
        this.sp = res;
        console.log(res);
        if (res) {
          this.display1 = true;
        } else {
          console.log("B")
        }
      })
      this.packageService.getOnePackageList(this.event.pkg_id).subscribe((res) => {
        this.package = res;
      })
    });
    
  }

  booking(message: any) {
    this.mail={msg:message,mail:this.sp.email}
    this.itineraryService.postEmail(this.mail).subscribe((res:any) => {
    alert(res.msg);
    this.display1 = false;
    });
  }

  confirmBooking(Itenararyid: string, eventIndex: number, eventId: string){
    if (confirm("Confirm Booking ?")){
      this.refreshItinerryList();
      this.paymentdata = { Itenararyid, eventIndex, eventId }
      this.itineraryService.changeBookingStatus(this.paymentdata).subscribe((res) => {
      });
      this.refreshItinerryList();
    }
  }
}
