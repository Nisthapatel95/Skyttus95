import { TestBed } from '@angular/core/testing';

import { PropertytypeListPresenterService } from './propertytype-list-presenter.service';

describe('PropertytypeListPresenterService', () => {
  let service: PropertytypeListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertytypeListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
