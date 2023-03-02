import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
@Injectable({
  providedIn: 'root'
})
export class PropertytypeListPresenterService {

  private delete: Subject<number>;
  public delete$: Observable<number>;

  constructor() { 
    this.delete = new Subject();
    this.delete$ = new Observable();
    this.delete$ = this.delete.asObservable();
  }
  deleteEmployee(id: number){
    this.delete.next(id);
  }
}
