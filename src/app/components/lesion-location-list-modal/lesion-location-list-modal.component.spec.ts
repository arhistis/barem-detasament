import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LesionLocationListModalComponent } from './lesion-location-list-modal.component';

describe('LesionLocationListModalComponent', () => {
  let component: LesionLocationListModalComponent;
  let fixture: ComponentFixture<LesionLocationListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesionLocationListModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LesionLocationListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
