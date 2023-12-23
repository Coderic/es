import { TestBed } from '@angular/core/testing';

import { InvestorGuard } from './investor.guard';

describe('InvestorGuard', () => {
  let guard: InvestorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InvestorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
