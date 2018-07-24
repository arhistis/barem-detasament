import { TestBed, inject } from '@angular/core/testing';

import { LesionService } from './lesion.service';

describe('LesionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LesionService]
    });
  });

  it('should be created', inject([LesionService], (service: LesionService) => {
    expect(service).toBeTruthy();
  }));
});
