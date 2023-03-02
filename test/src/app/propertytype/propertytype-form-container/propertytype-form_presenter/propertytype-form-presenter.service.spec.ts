import { TestBed } from '@angular/core/testing';

import { PropertytypeFormPresenterService } from './propertytype-form-presenter.service';

describe('PropertytypeFormPresenterService', () => {
  let service: PropertytypeFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertytypeFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
