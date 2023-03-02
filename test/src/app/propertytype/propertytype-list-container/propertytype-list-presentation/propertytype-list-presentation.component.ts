import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { PropertytypeService } from '../../service/propertytype.service';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

import { propertytype } from '../../modul/model';
import { PropertytypeListPresenterService } from '../propertytype-list_presenter/propertytype-list-presenter.service';
export interface PeriodicElement {

}


@Component({
  selector: 'app-propertytype-list-presentation',
  templateUrl: './propertytype-list-presentation.component.html',
  styleUrls: ['./propertytype-list-presentation.component.scss']
})
export class PropertytypeListPresentationComponent implements OnInit {

  displayedColumns: string[] = ['code', 'name', 'isActive', 'action'];
  employee1: propertytype[];

  @Input() public set userList(value: propertytype[] | null) {
    if (value) {
      this.propertytype = value;
      this.dataSource = value;
      this.isEditMode = true;
    }
  }
  public get userList(): propertytype[] {
    return this._auctioncategory1
  }
  @Output() public edit: EventEmitter<number>;
  @Output() public delete: EventEmitter<number>;

  public dataSource: propertytype[] = [];
  private _auctioncategory1!: propertytype[];
  propertytype!: propertytype[];
  public isEditMode: boolean = false;

  constructor(private router: Router, private PropertytypeService: PropertytypeService, private PropertytypeListPresenterService: PropertytypeListPresenterService) {
    this.employee1 = [];
    this.edit = new EventEmitter();
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
    this.PropertytypeListPresenterService.delete$.subscribe((data: number) => {
      this.delete.emit(data);
    })
  }

  onEdit(id: string) {
    this.router.navigate(['propertytype/app-propertytype-form-container'], { queryParams: { id: id } });
  }
  public ondelete(id: number) {
    this.PropertytypeListPresenterService.deleteEmployee(id);
  }

}

