import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ItineraryService } from '../../../services/itinerary-service/itinerary.service';
import { TravelagentPaymentService } from '../../../services/sharedata/travelagent-payment.service';
import { ServiceProvider } from '../../../services/user-service/serviceProvider/serviceprovider.model';
import { Package } from '../../../services/package-service/package.model';
import { Observable } from 'rxjs';
import { PackageService } from '../../../services/package-service/package.service';
import { ServiceProviderService } from '../../../services/user-service/serviceProvider/serviceprovider.service';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers:[ServiceProviderService, PackageService]

})
export class EventComponent implements OnInit {


  public eventForm: FormGroup;
  public minimum_date: string;
  public check_in_time = false; // for loading purpose
  public duration = false; // for hotel
  public travel_category = false; // for travel purpose
  public depature_time = false; // When travel by train
  public event_type = false;
  ServiceProviderCtrl = new FormControl();
  PackageCtrl = new FormControl();

  filteredServiceProviders: Observable<ServiceProvider[]>;
  filteredPackages: Observable<Package[]>;

  serviceProviders: ServiceProvider[] = [];
  packages: Package[] = [];
  pkgs: Package[] = [];

  formType: String = "Custom";
  Sp_name:String;
  Sp_id:String;




  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EventComponent>,
    private eventService: ItineraryService,
    public ServiceProviderService: ServiceProviderService,
    public PackageService: PackageService,
    public travelagentPaymentService: TravelagentPaymentService,
    @Inject(MAT_DIALOG_DATA) public data: any


  ) {
    // this.formType  = this.eventForm.controls['event_type'].value;
    //console.log(this.formType);


    // this.filteredPackages = this.PackageCtrl.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(pkg => pkg ? this.Pkg_filterStates(pkg) : this.packages.slice())
    //   );

    this.filteredServiceProviders = this.ServiceProviderCtrl.valueChanges
      .pipe(
        startWith(''),
        map(sp => sp ? this.SP_filterStates(sp) : this.serviceProviders.slice())
      );

 this.getPkgs();
  }


  getPkgs(){
    console.log("cntrl vl: "+this.ServiceProviderCtrl.value);
    for(var i in this.serviceProviders){
      if(this.serviceProviders[i].username == this.ServiceProviderCtrl.value){
        this.Sp_id = this.serviceProviders[i]._id;
        break;
      }
    }
var count = 0;

  this.pkgs = [];
    for(var i in this.packages){
      if(this.packages[i].spid == this.Sp_id){
        this.pkgs[count] = this.packages[i];
        count = count + 1;
        console.log(JSON.stringify(this.pkgs[count]));
      }
    }
    // for(var i in this.serviceProviders){
    //   if(this.serviceProviders[i]._id == this.Sp_id){
    //     this.Sp_name = this.serviceProviders[i].fname + "buk " + this.serviceProviders[i].username;
    //     console.log("sp naem : "+this.Sp_name);
    //   }
    // }
    
  }

  private SP_filterStates(value: string): ServiceProvider[] {
    const filterValue = value.toLowerCase();
    return this.serviceProviders.filter(sp => sp.fname.toLowerCase().indexOf(filterValue) === 0);
  }

  // private Pkg_filterStates(value: string): Package[] {
  //   const filterValue = value.toLowerCase();
  //   return this.packages.filter(pkg => pkg.name.toLowerCase().indexOf(filterValue) === 0);
  // }

  onNoClick(): void {
    this.dialogRef.close();
  }
  min_date() {
    var min_date;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var day = dd.toString();
    var month = mm.toString();
    if (dd < 10) {
      day = '0' + dd;
    }
    if (mm < 10) {
      month = '0' + mm;
    }
    min_date = yyyy + '-' + month + '-' + day;
    console.log(min_date);
    return min_date;
  }

  ngOnInit() {

    this.get_SP_PKG();

    this.minimum_date = this.min_date();
    this.eventForm = this.formBuilder.group({
      id: [this.data.id],
      price: [this.data.price, [Validators.required]],
      name: [this.data.name, [Validators.required]],
      venue: [this.data.venue, [Validators.required]],
      date_from: [this.data.date_from, [Validators.required]],
      date_to: [this.data.date_to],
      description: [this.data.description],
      sp_id: [this.data.sp_id],
      pkg_id: [this.data.pkg_id],
      cost: [this.data.cost, [Validators.required]],
      check_in_time: [this.data.check_in_time], // for loading purpose
      duration: [this.data.duration], // for hotel
      travel_category: [this.data.travel_category], // for travel purpose
      depature_time: [this.data.depature_time], // When travel by train
      event_type: [this.data.event_type], // for editing purpose
      payment_status: "not_paid",
      booking_status: "not_booked",

    });
    console.log("wvt tyo pera"+ this.formType);
    this.formType = this.eventForm.value.event_type;
    console.log("wvt tyo pasu"+ this.formType);



  }

  get_SP_PKG() {

    this.ServiceProviderService.getServiceProviderList().subscribe((res) => {
      this.ServiceProviderService.sp = res as ServiceProvider[];
      this.serviceProviders = this.ServiceProviderService.sp;
      //console.log("SP lsit: " + JSON.stringify(this.serviceProviders));

    });

    this.PackageService.getPackageList().subscribe((res) => {
      this.PackageService.package = res as Package[];
      this.packages = this.PackageService.package;
      //console.log("packages list: " + JSON.stringify(this.packages));

    });

  }

  onSubmit() {
    if (isNaN(this.data.id)) {
      this.eventService.addEvent(this.eventForm.value);
      console.log(JSON.stringify(this.eventForm.value.id));
      this.dialogRef.close();
    } else {
      this.eventService.editEvent(this.eventForm.value);
      this.dialogRef.close();
    }
  }

}
