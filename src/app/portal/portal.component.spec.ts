import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalComponent } from './portal.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PortalComponent', () => {
  let component: PortalComponent;
  let fixture: ComponentFixture<PortalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortalComponent],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(PortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
