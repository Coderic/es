import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PackageTypeService } from './package-type.service';

describe('PackageTypeService', () => {
  let service: PackageTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(PackageTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
