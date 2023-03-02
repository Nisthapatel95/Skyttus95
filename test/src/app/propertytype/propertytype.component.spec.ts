import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertytypeComponent } from './propertytype.component';

describe('PropertytypeComponent', () => {
  let component: PropertytypeComponent;
  let fixture: ComponentFixture<PropertytypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertytypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
