import { TestBed, inject } from '@angular/core/testing';

import { SpPackageService } from './sp-package.service';

describe('SpPackageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpPackageService]
    });
  });

  it('should be created', inject([SpPackageService], (service: SpPackageService) => {
    expect(service).toBeTruthy();
  }));
});
