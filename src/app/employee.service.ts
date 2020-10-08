import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  constructor(private http: HttpClient) { }

  addEmployeeSubject = new Subject<any>();

  getEmployees() {
    return this.http.get("https://jsonblob.com/api/6fce34a1-095f-11eb-a163-63817985aca0");
  }


}
