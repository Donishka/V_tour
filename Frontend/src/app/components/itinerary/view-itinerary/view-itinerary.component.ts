import { Component, OnInit } from '@angular/core';
import { ItineraryService } from '../../../services/itinerary-service/itinerary.service';
import { Itinerary } from '../../../services/itinerary-service/model/itinerary.model';
import { SharedataService } from '../../../services/sharedata/sharedata.service';
import { EditItineraryComponent } from '../edit-itinerary/edit-itinerary.component';
import { ItineraryComponent } from '../itinerary.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-view-itinerary',
  templateUrl: './view-itinerary.component.html',
  styleUrls: ['./view-itinerary.component.css']
})
export class ViewItineraryComponent implements OnInit {

  itinerary: Itinerary = new Itinerary();
  view:boolean=true;
  isPopupOpened = false;
  Itinerary:any;

  constructor(
    public itineraryService: ItineraryService,
    private dataS: SharedataService,
    private dialog?: MatDialog
    
  ) {
    this.dataS.shareUserData();
    this.dataS.currentMessge.subscribe(traveAgentdata => {
      this.itinerary.traveAgentName = traveAgentdata.username;
      this.refreshServiceProviderList();
    });
    
   // this.editItinerary('5bc62637cdfa43e6045fa8aa');

    this.itineraryService.getOneItinerry('5bc62637cdfa43e6045fa8aa').subscribe(res =>{
      console.log(res); 
    })
   }

   editItinerary(id:String){
     this.isPopupOpened = true;
       this.itineraryService.id=id;
      console.log("id "+this.itineraryService.id);
      const dialogRef = this.dialog.open(EditItineraryComponent,{
  
        data: {id:this.itineraryService.id}
      });
  console.log("id 2 "+this.itineraryService.id);
  dialogRef.afterClosed().subscribe(result=>{
    this.isPopupOpened = false;
  })
    
   }

  ngOnInit() {

  }

  refreshServiceProviderList() {
    this.itineraryService.getItinerrytList(this.itinerary).subscribe((res) => {
      this.itineraryService.iT = res as Itinerary[];
      if(this.itineraryService.iT.length == 0){
        this.view = false;
      }
    });
  }

}
