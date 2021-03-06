import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ClientService } from '../../../services/user-service/client/client.service';
import { Client } from '../../../services/user-service/client/client.model';
import { NgxSpinnerService } from 'ngx-spinner';
declare var M: any;
@Component({
  selector: 'app-add-new-clients',
  templateUrl: './add-new-clients.component.html',
  styleUrls: ['./add-new-clients.component.css'],
  providers:[ClientService]
})
export class AddNewClientsComponent implements OnInit {

  constructor(public clientService: ClientService,
    private flashMessage:FlashMessagesService,
    private spinner: NgxSpinnerService,
    private router:Router) { }
    rePassword:any;
  minimum_date:any;

  ngOnInit() {
    this.minimum_date = this.min_date();
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
    this.resetForm();
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

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.clientService.selectedClient = {
      _id:"",
      fname: "",
      lname:"",
      password: "",
      email:"",
      telephone: [""],
      address: "",
      city:"",
      country:"",
      postalcode:"",
      noofvisitors: null,
      foodprefer:[""],
      intactivities:[""],
      agegroup:"",
      datefrom:"",
      dateto:""
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.clientService.postClient(form.value).subscribe((res:any) => {
        if (res.state == false) {
          alert(res.msg);
        } else {
          this.resetForm(form);
          this.flashMessage.show('Client Saved', { cssClass: 'alert-success', timeout: 4000 });
          alert('Client Saved');
          this.router.navigateByUrl('/travelagent-account');
        }
      });
    }
    else {
      this.clientService.putClient(form.value).subscribe((res) => {
        this.resetForm(form);
        this.flashMessage.show('Client Updated', { cssClass: 'alert-success', timeout: 4000 });
        alert('Client Updated');
        console.log("Updated");
        this.router.navigateByUrl('/travelagent-account');
      });
    }
  }
}