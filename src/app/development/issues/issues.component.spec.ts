import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IssuesComponent } from './issues.component';
import { environment } from 'src/environments/environment';

describe('IssuesComponent', () => {
  let component: IssuesComponent;
  let fixture: ComponentFixture<IssuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssuesComponent],
      imports: [
        HttpClientTestingModule,
      ],
    });
    fixture = TestBed.createComponent(IssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
