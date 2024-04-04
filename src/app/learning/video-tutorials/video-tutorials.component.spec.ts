import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTutorialsComponent } from './video-tutorials.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VideoTutorialsComponent', () => {
  let component: VideoTutorialsComponent;
  let fixture: ComponentFixture<VideoTutorialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoTutorialsComponent],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(VideoTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
