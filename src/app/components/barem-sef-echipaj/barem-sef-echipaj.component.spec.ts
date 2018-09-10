import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaremSefEchipajComponent } from './barem-sef-echipaj.component';

describe('BaremSefEchipajComponent', () => {
  let component: BaremSefEchipajComponent;
  let fixture: ComponentFixture<BaremSefEchipajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaremSefEchipajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaremSefEchipajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
