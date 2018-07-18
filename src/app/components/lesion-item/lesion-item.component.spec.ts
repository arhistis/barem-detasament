import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LesionItemComponent } from './lesion-item.component';

describe('LesionItemComponent', () => {
  let component: LesionItemComponent;
  let fixture: ComponentFixture<LesionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LesionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
