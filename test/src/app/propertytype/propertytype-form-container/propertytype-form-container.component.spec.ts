import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertytypeFormContainerComponent } from './propertytype-form-container.component';

describe('PropertytypeFormContainerComponent', () => {
  let component: PropertytypeFormContainerComponent;
  let fixture: ComponentFixture<PropertytypeFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertytypeFormContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertytypeFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
