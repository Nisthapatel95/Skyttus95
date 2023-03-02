import { TestBed } from '@angular/core/testing';

import { PropertytypeService } from './propertytype.service';

describe('PropertytypeService', () => {
  let service: PropertytypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertytypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
