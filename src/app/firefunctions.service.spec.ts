import { TestBed } from '@angular/core/testing';

import { FirefunctionsService } from './firefunctions.service';

describe('FirefunctionsService', () => {
  let service: FirefunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirefunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
