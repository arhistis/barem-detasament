import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LesionsListModalComponent } from './lesions-list-modal.component';

describe('LesionsListModalComponent', () => {
  let component: LesionsListModalComponent;
  let fixture: ComponentFixture<LesionsListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesionsListModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LesionsListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
