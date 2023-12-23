import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RemiteeService } from './remitee.service';

describe('RemiteeService', () => {
  let service: RemiteeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(RemiteeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
