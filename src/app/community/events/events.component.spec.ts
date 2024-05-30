import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsComponent } from './events.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsComponent],
      imports: [
        HttpClientTestingModule,
      ],
    });
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
