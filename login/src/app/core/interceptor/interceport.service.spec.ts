import { TestBed } from '@angular/core/testing';

import { InterceportService } from './interceport.service';

describe('InterceportService', () => {
  let service: InterceportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
