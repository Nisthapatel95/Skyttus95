import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertytypeListContainerComponent } from './propertytype-list-container.component';

describe('PropertytypeListContainerComponent', () => {
  let component: PropertytypeListContainerComponent;
  let fixture: ComponentFixture<PropertytypeListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertytypeListContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertytypeListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
