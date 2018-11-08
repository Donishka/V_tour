import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { ClientService } from '../../../services/user-service/client/client.service';
import { Client } from '../../../services/user-service/client/client.model';

declare var M:any;

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.css'],
  providers: [ClientService]
})
export class ViewClientsComponent implements OnInit {
  searchKeyword:string;
  constructor(public clientService:ClientService,
    private flashMessage:FlashMessagesService,
    private router:Router) { }

  ngOnInit() {
    this.refreshClientList();
    this.resetForm();
  }
  display: boolean = false;

  showDialog() {
    this.display = true;
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.clientService.selectedClient = {
      _id: "",
      fname: "",
      lname: "",
      password: "",
      email: "",
      telephone: [""],
      address: "",
      city: "",
      country: "",
      noofvisitors: null,
      foodprefer: [""],
      intactivities: [""],
      agegroup: "",
      datefrom:"",
      dateto:""
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.clientService.postClient(form.value).subscribe((res) => {
        this.refreshClientList();
        this.resetForm(form);
        this.flashMessage.show('Client Saved', { cssClass: 'alert-success', timeout: 4000 });
      });
    }
    else {
      this.clientService.putClient(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshClientList();
        this.flashMessage.show('Client Updated', { cssClass: 'alert-success', timeout: 4000 });
      });
    }
  }

  refreshClientList() {
    this.clientService.getClientList().subscribe((res) => {
      this.clientService.client = res as Client[];
    });
  }

  onEdit(client: Client) {
    this.clientService.selectedClient= client;
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.clientService.deleteClient(_id).subscribe((res) => {
        this.refreshClientList();
      });
    }
  }
}
  
