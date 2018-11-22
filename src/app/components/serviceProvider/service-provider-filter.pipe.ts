import { ServiceProvider } from './../../services/user-service/serviceProvider/serviceprovider.model';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'ServiceProviderFilter'
})

export class ServiceProviderFilterPipe implements PipeTransform {
    transform(serviceproviders: ServiceProvider[], searchKeyword: string, ServiceProvider: ServiceProvider): ServiceProvider[] {
        if (!serviceproviders || !searchKeyword) {
            return serviceproviders;
        } else {
            return serviceproviders.filter(serviceproviders =>
                serviceproviders.fname.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1 ||
                serviceproviders.address.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1 ||
                serviceproviders.telephone.toString().indexOf(searchKeyword.toString()) !== -1 ||
                serviceproviders.type.toString().indexOf(searchKeyword.toString()) !== -1 ||
                serviceproviders.email.toString().indexOf(searchKeyword.toString()) !== -1);
        }
    }
}