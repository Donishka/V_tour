import { PipeTransform, Pipe } from '@angular/core';
import { ItenararyPayment } from '../../../services/payment-service/itenarary-payment/itenarary-payment.model'

@Pipe({
    name: 'ClientPaymentFilter'
})

export class ClientPaymentFilterPipe implements PipeTransform {
    transform(payments: ItenararyPayment[], searchKeyword: string, Payments: ItenararyPayment): ItenararyPayment[] {
        if (!payments || !searchKeyword) {
            return payments;
        } else {
            return payments.filter(payments =>
                payments.clientname.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1 ||
                payments.status.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1);
        }
    }
}