import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { observable, Observable, Subject } from 'rxjs';
import { propertytype } from '../../modul/model';

@Injectable({
  providedIn: 'root'
})
export class PropertytypeFormPresenterService {

  private userFormData: Subject<propertytype>;
  public userFormData$: Observable<propertytype>;

  constructor(private fb: FormBuilder) {
    this.userFormData = new Subject();
    this.userFormData$ = new Observable();
    this.userFormData$ = this.userFormData.asObservable();
  }

  buildForm() {
    return this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      isActive: [true, Validators.required],
    })
  }
  submitUser(User: FormGroup) {
    this.userFormData.next(User.value);
    console.log(User.value);
  }
}
