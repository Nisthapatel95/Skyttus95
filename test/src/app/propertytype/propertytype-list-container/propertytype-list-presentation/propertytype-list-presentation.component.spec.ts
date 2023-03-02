import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertytypeListPresentationComponent } from './propertytype-list-presentation.component';

describe('PropertytypeListPresentationComponent', () => {
  let component: PropertytypeListPresentationComponent;
  let fixture: ComponentFixture<PropertytypeListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertytypeListPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertytypeListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
