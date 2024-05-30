import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTutorialsComponent } from './video-tutorials.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('VideoTutorialsComponent', () => {
  let component: VideoTutorialsComponent;
  let fixture: ComponentFixture<VideoTutorialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    declarations: [VideoTutorialsComponent],
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    fixture = TestBed.createComponent(VideoTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
