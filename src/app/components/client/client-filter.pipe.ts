import { Client } from './../../services/user-service/client/client.model';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'ClientFilter'
})

export class ClientFilterPipe implements PipeTransform {
    transform(clients: Client[], searchKeyword: string, Client: Client): Client[] {
        if (!clients || !searchKeyword) {
            return clients;
        } else {
            return clients.filter(clients =>
                clients.fname.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1 ||
                clients.address.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1 ||
                clients.telephone.toString().indexOf(searchKeyword.toString()) !== -1 ||
                clients.email.toString().indexOf(searchKeyword.toString()) !== -1);
        }
    }
}