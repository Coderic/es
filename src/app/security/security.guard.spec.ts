import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/auth.service';

import { SecurityGuard } from './security.guard';

describe('SecurityGuard', () => {
  let guard: SecurityGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        AuthService
      ]
    });
    guard = TestBed.inject(SecurityGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
