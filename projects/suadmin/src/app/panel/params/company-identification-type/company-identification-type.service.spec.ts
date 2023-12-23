import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CompanyIdentificationTypeService } from './company-identification-type.service';

describe('CompanyIdentificationTypeService', () => {
  let service: CompanyIdentificationTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(CompanyIdentificationTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
