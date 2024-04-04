import { TestBed } from '@angular/core/testing';

import { SuGuard } from './su.guard';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SuGuard', () => {
  let guard: SuGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    guard = TestBed.inject(SuGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
