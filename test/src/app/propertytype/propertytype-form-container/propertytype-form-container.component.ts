import { Component, OnInit } from '@angular/core';
import { PropertytypeFormPresenterService } from './propertytype-form_presenter/propertytype-form-presenter.service';
import { PropertytypeService } from '../service/propertytype.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { propertytype } from '../modul/model';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-propertytype-form-container',
  templateUrl: './propertytype-form-container.component.html',
  styleUrls: ['./propertytype-form-container.component.scss'],
  providers: [PropertytypeFormPresenterService]
})
export class PropertytypeFormContainerComponent implements OnInit {

  public propertyDetails$: Observable<any>;
  public id: string;

  constructor(private PropertytypeService: PropertytypeService,
    private router: Router,
    private activateRoute: ActivatedRoute) {

    this.propertyDetails$ = new Observable();

    this.id = this.activateRoute.snapshot.queryParams["id"];
    if (this.id) {
      this.propertyDetails$ = this.PropertytypeService.getEmployeeById(this.id);
      console.log(this.id)
    }
  }

  ngOnInit(): void {
  }

  createEmployee(userForm: propertytype) {
    this.PropertytypeService.createEmployee(userForm).subscribe((data) => {
      console.log("add Successfully");
      console.log(data);
      this.router.navigateByUrl('propertytype/app-propertytype-list-container');
    })
  }
  editUser(userForm: any) {
    this.PropertytypeService.updateEmployee(this.id, userForm).subscribe((data) => {
      console.log("USer Data Edit Successfully", data);
      this.router.navigateByUrl('propertytype/app-propertytype-list-container');
    })
  }
}

