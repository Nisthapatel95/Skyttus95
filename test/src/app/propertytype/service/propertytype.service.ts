import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { propertytype } from '../modul/model';
@Injectable({
  providedIn: 'root'
})
export class PropertytypeService {

  private baseUrl: string;
  constructor(private httpclient: HttpClient) { 
    this.baseUrl = "http://localhost:3000/propertytypelist";
  }

  getEmployeesList(): Observable<propertytype[]>{
    return this.httpclient.get<propertytype[]>(`${this.baseUrl}`);
  }
  createEmployee(propertytype: propertytype): Observable<Object>{
    return this.httpclient.post(`${this.baseUrl}`, propertytype);
  }

  getEmployeeById(id: string): Observable<propertytype>{
    return this.httpclient.get<propertytype>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id: string, propertytype: propertytype): Observable<Object>{
    return this.httpclient.put(`${this.baseUrl}/${id}`, propertytype);
  }
  // updateEmployee(id: string, propertytype: propertytype): Observable<Object>{
  //   return this.httpclient.put(`${this.baseUrl}/${id}`, propertytype);
  // }
  
  deleteEmployee(id: string): Observable<Object>{
    return this.httpclient.delete(`${this.baseUrl}/${id}`);
  }
}
