import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignatarioComponent } from './consignatario.component';

describe('ConsignatarioComponent', () => {
  let component: ConsignatarioComponent;
  let fixture: ComponentFixture<ConsignatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsignatarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsignatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
