import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { propertytype } from '../../modul/model';
import { PropertytypeFormPresenterService } from '../../propertytype-form-container/propertytype-form_presenter/propertytype-form-presenter.service';
@Component({
  selector: 'app-propertytype-form-presentation',
  templateUrl: './propertytype-form-presentation.component.html',
  styleUrls: ['./propertytype-form-presentation.component.scss'],
  viewProviders: [PropertytypeFormPresenterService]
})
export class PropertytypeFormPresentationComponent implements OnInit {



  @Input() public set userData(value: propertytype | null) {
    if (value) {
      this.userForm.patchValue(value);
      this._userData = value;
      this.isEditMode = true;
    }
  }

  public get userData(): propertytype | null {
    return this._userData;
  }
  @Output() public add: EventEmitter<propertytype>;
  @Output() public edit: EventEmitter<propertytype>;

  public userForm: FormGroup;
  private _userData!: propertytype;
  public isFormSubmmited: boolean;
  public isEditMode: boolean = false;

  constructor(public PropertytypeFormPresenterService: PropertytypeFormPresenterService) {
    this.userForm =
      this.PropertytypeFormPresenterService.buildForm();
    this.add = new EventEmitter();
    this.edit = new EventEmitter();
    this.isFormSubmmited = false;
  }
  ngOnInit(): void {

    this.PropertytypeFormPresenterService.userFormData$.subscribe((data: propertytype) => {
      if (this.isEditMode) {
        this.edit.emit(data);
      }
      else {
        this.add.emit(data);
      }
    })
  }
  get userFormControl() {
    return this.userForm.controls;
  }

  onSubmit() {
    if (this.isEditMode) {
      this.edit.emit(this.userForm.value);
    }
    else {
      this.add.emit(this.userForm.value);
    }
  }

  Submit(): void {
    this.isFormSubmmited = true;
    if (this.userForm.invalid) {
      return;
    }
  
  }

  onReset(): void {
    this.isFormSubmmited = false;
    this.userForm.reset();
  }
}
