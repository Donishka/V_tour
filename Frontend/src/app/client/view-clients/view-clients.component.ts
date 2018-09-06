import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
 
import { ClientService } from '../../service/client/client.service';
import { Client } from '../../service/client/client.model';

declare var M:any;

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.css'],
  providers: [ClientService]
})
export class ViewClientsComponent implements OnInit {

  constructor(public clientService:ClientService) { }

  ngOnInit() {
    this.refreshClientList();
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
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
}
  
