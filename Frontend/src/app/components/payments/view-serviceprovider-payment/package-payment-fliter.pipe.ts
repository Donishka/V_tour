import { PipeTransform, Pipe } from '@angular/core';
import { PackagePayment } from '../../../services/payment-service/package-payment/package-payment.model'

@Pipe({
    name: 'PackagePaymentFilter'
})

export class PackagePaymentFilterPipe implements PipeTransform {
    transform(payments: PackagePayment[], searchKeyword: string, Payments: PackagePayment): PackagePayment[] {
        if (!payments || !searchKeyword) {
            return payments;
        } else {
            return payments.filter(payments =>
                payments.travelagentname.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1 ||
                payments.packagename.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1 ||
                payments.status.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1);
        }
    }
}