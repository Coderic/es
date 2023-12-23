import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CurrencyTypeService } from './currency-type.service';

describe('CurrencyTypeService', () => {
  let service: CurrencyTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(CurrencyTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
