import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaremTreatmentComponent } from './barem-treatment.component';

describe('BaremTreatmentComponent', () => {
  let component: BaremTreatmentComponent;
  let fixture: ComponentFixture<BaremTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaremTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaremTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
