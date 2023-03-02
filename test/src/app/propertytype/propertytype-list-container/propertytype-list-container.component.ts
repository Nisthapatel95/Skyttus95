import { Component, OnInit } from '@angular/core';
import { propertytype } from '../modul/model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { PropertytypeService } from '../service/propertytype.service';
@Component({
  selector: 'app-propertytype-list-container',
  templateUrl: './propertytype-list-container.component.html',
  styleUrls: ['./propertytype-list-container.component.scss']
})
export class PropertytypeListContainerComponent implements OnInit {

  public propertytype$: Observable<propertytype[]>;


  constructor(private PropertytypeService: PropertytypeService, private router: Router) {
    this.propertytype$ = new Observable();
  }

  ngOnInit(): void {
    this.propertytype$ = this.PropertytypeService.getEmployeesList();
  }
  public delete(id: any) {
    this.PropertytypeService.deleteEmployee(id).subscribe(data => {
      this.propertytype$ = this.PropertytypeService.getEmployeesList();
    })
  }
}
