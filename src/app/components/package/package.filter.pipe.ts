import { PipeTransform, Pipe } from '@angular/core';
import { Package } from '../../services/package-service/package.model'

@Pipe({
    name: 'PackageFilter'
})

export class PackageFilterPipe implements PipeTransform {
    transform(packages: Package[], searchKeyword: string, pkg: Package): Package[] {
        if (!packages || !searchKeyword) {
            return packages;
        } else {
            return packages.filter(packages =>
                packages.name.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1 ||
                packages.type.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1);
        }
    }
}