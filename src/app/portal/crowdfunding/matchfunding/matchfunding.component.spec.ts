import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchfundingComponent } from './matchfunding.component';

describe('MatchfundingComponent', () => {
  let component: MatchfundingComponent;
  let fixture: ComponentFixture<MatchfundingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchfundingComponent]
    });
    fixture = TestBed.createComponent(MatchfundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
