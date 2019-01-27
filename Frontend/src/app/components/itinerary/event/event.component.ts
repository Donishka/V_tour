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
import { Jsonp } from '@angular/http';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers: [ServiceProviderService, PackageService]

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
  Sp_name: String;
  Sp_id: String;
  pkg_id: String;
  //price:number;
  location: String[] = [];
  lat: number = 6.978554010342724;
  lng: number = 79.96221732040647;
  SPusername = "SP username";
  SelectedPkg = "Select a SP from";
  eventbutton = "ADD EVENT";

  _id = "id";





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



  setCost() {
    for (var i in this.packages) {
      if (this.pkgs[i]._id == this.eventForm.value.pkg_id) {
        this.eventForm.patchValue({ cost: this.pkgs[i].price });
        break;
      }
    }
  }


  getPkgs() {
    console.log("cntrl vl: " + this.ServiceProviderCtrl.value);
    for (var i in this.serviceProviders) {
      if (this.serviceProviders[i].username == this.ServiceProviderCtrl.value) {
        this.Sp_id = this.serviceProviders[i]._id;
        break;
      }
    }
    var count = 0;

    this.pkgs = [];
    for (var i in this.packages) {
      if (this.packages[i].spid == this.Sp_id) {
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

  onChoseClick(event) {
    console.log(event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
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

  setLocation() {

    this.eventForm.patchValue({ lng: this.lng });
    this.eventForm.patchValue({ lat: this.lat });
    console.log(this.eventForm.value.location);
  }

  ngOnInit() {



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
      lng: [this.data.lng],
      lat: [this.data.lat],
      intime: [this.data.intime],
      outtime: [this.data.outtime],
      cost: [this.data.cost, [Validators.required]],
      check_in_time: [this.data.check_in_time], // for loading purpose
      duration: [this.data.duration], // for hotel
      travel_category: [this.data.travel_category], // for travel purpose
      depature_time: [this.data.depature_time], // When travel by train
      event_type: [this.data.event_type], // for editing purpose
      payment_status: "not_paid",
      booking_status: "not_booked",

    });

    if (!(isNaN(this.data.id))) { this.eventbutton = "UPDATE"; }

    console.log("wvt tyo pera" + this.formType);
    this.formType = this.eventForm.value.event_type;
    this.Sp_id = this.eventForm.value.sp_id;
    this.pkg_id = this.eventForm.value.pkg_id;

    if (this.eventForm.value.lat != null && this.eventForm.value.lng != null) {
      this.lat = parseFloat(this.eventForm.value.lat);
      this.lng = parseFloat(this.eventForm.value.lng);
    }

    console.log("longitude " + this.lng);
    console.log("latitude " + this.lat);

    console.log("wvt tyo pasu" + this.formType);
    console.log("sp id: " + this.Sp_id);

    console.log("time " + this.eventForm.value.intime);
    console.log("form values " + JSON.stringify(this.eventForm.value));



    this.get_SP_PKG();
    // this.lng = this.eventForm.value.lng;
    //this.lat = this.eventForm.value.lat;

    //console.log("lat "+this.eventForm.value.lng +" lng "+this.eventForm.value.lat);



  }

  getDateDuration(d1: String, d2: string): any {

    var m1 = d1.slice(5, 7);
    var m2 = d2.slice(5, 7);
    var dy1 = d1.slice(8, 10);
    var dy2 = d2.slice(8, 10);
    var y1 = d1.slice(0, 4);
    var y2 = d1.slice(0, 4);
    console.log("m1: " + m1 + " m2: " + m2 + " dy1: " + dy1 + " dy2: " + dy2);

    var m11 = Number(m1);
    var m22 = Number(m2);
    var dy11 = Number(dy1);
    var dy22 = Number(dy2);
    var y11 = Number(y1);
    var y22 = Number(y2);

    // var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    // var firstDate = new Date(y11, m11, dy11);
    // var secondDate = new Date(y22, m22, dy22);

    // var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));

    if (m11 == m22) {
      console.log(dy22 - dy11);
      return dy22 - dy11 + " Days";
    } else {
      var m30 = [9, 4, 6, 11];
      if (m30.includes(m11)) {
        return (30 - dy11) + dy22 + " Days";
      } else
        return (31 - dy11) + dy22 + " Days";
    }
  }

  getSPusername(id: String) {

    //console.log("id passes "+ id+ " SP s " + JSON.stringify(this.serviceProviders));
    for (var i in this.serviceProviders) {
      //console.log("id passes in  "+ this.serviceProviders[i]._id);
      if (this.serviceProviders[i]._id == id) {
        this.SPusername = this.serviceProviders[i].username;
        //console.log("Loaded user name "+ this.SPusername);
        break;
      }
    }

    this.PackageService.getPackageList().subscribe((res) => {
      this.PackageService.package = res as Package[];
      this.packages = this.PackageService.package;
      //console.log("packages list: " + JSON.stringify(this.packages));

      var count = 0;
      this.pkgs = [];
      console.log("pkg id passes " + JSON.stringify(this.packages));
      for (var i in this.packages) {
        console.log("pkg id" + this.packages);
        if (this.packages[i].spid == this.Sp_id) {
          this.pkgs[count] = this.packages[i];
          count = count + 1;
          console.log(JSON.stringify(this.pkgs[count]));
        }
      }
      this.getPkgs();
    });


  }
  getOnePkg(id: String) {
    console.log("pkg list " + JSON.stringify(this.packages) + "id " + id);
    for (var i in this.packages) {
      console.log("pkg id passes in  " + this.packages[i]._id);
      if (this.packages[i]._id == id) {
        this.SelectedPkg = this.packages[i].name;
        console.log("Loaded pkg  name " + this.SelectedPkg);
        break;
      }
    }
  }

  get_SP_PKG() {

    this.ServiceProviderService.getServiceProviderList().subscribe((res) => {
      this.ServiceProviderService.sp = res as ServiceProvider[];
      this.serviceProviders = this.ServiceProviderService.sp;
      //console.log("SP lsit: " + JSON.stringify(this.serviceProviders));
      this.getSPusername(this.Sp_id);

    });



    this.PackageService.getPackageList().subscribe((res) => {
      this.PackageService.package = res as Package[];
      this.packages = this.PackageService.package;
      //console.log("packages list: " + JSON.stringify(this.packages));
    });

  }

  onSubmit() {
    if (isNaN(this.data.id)) {
      if (this.eventForm.value.lat != 6.978554010342724 || this.eventForm.value.lng != 79.96221732040647) {
        this.eventService.addEvent(this.eventForm.value);
        console.log(JSON.stringify(this.eventForm.value.id));
        this.dialogRef.close();
      } else { window.alert("Please select the location on map"); }
    } else {
      this.eventService.editEvent(this.eventForm.value);
      this.dialogRef.close();
    }
  }

}
