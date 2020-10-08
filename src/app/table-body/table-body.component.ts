import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: '[app-table-body]',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.css']
})
export class TableBodyComponent implements OnInit {

  employees;

  delete(emp) {
    this.employees.splice(this.employees.indexOf(emp), 1);
  }

  constructor(public employeeService: EmployeeService) {

  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
    this.employeeService.addEmployeeSubject.subscribe(employee => {
      this.employees.push(employee)
    }
    );

  }

}
