import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaremLesionComponent } from './barem-lesion.component';

describe('BaremLesionComponent', () => {
  let component: BaremLesionComponent;
  let fixture: ComponentFixture<BaremLesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaremLesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaremLesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
