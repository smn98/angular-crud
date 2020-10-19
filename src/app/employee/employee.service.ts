import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject,from } from 'rxjs';

import { concatMap, filter,map, toArray } from 'rxjs/operators';
import { Employee } from './employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  addEmployeeSubject = new Subject<Employee>();
  updateEmployeeSubject = new Subject<Employee>();

  getEmployees() {
    return this.http.get("https://jsonblob.com/api/6fce34a1-095f-11eb-a163-63817985aca0");
  }

  filterEmployees(gender) {
    return this.http.get("https://jsonblob.com/api/6fce34a1-095f-11eb-a163-63817985aca0").pipe(
      concatMap(data => from(data as Employee[])),
      filter(employee => employee.gender == gender),
      toArray()
    )
  }


}
