import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertytypeFormPresentationComponent } from './propertytype-form-presentation.component';

describe('PropertytypeFormPresentationComponent', () => {
  let component: PropertytypeFormPresentationComponent;
  let fixture: ComponentFixture<PropertytypeFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertytypeFormPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertytypeFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
