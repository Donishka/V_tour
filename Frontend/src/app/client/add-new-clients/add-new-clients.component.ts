import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ClientService } from '../../service/client/client.service';
import { Client } from '../../service/client/client.model';

declare var M: any;
@Component({
  selector: 'app-add-new-clients',
  templateUrl: './add-new-clients.component.html',
  styleUrls: ['./add-new-clients.component.css'],
  providers:[ClientService]
})
export class AddNewClientsComponent implements OnInit {

  constructor(public clientService: ClientService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.clientService.selectedClient = {
      _id:"",
      fname: "",
      lname:"",
      username: "",
      password: "",
      email:"",
      telephone: null,
      address: "",
      noofvisitors: null,
      foodperfer:"",
      intactivities:[""],
      agegroup:"",
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.clientService.postClient(form.value).subscribe((res) => {
        
        this.resetForm(form);
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.clientService.putClient(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }
}