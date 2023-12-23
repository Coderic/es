import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { IdentificationTypeService } from './identification-type.service';

describe('IdentificationTypeService', () => {
  let service: IdentificationTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(IdentificationTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
