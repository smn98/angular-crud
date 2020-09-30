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
    this.employeeService.deleteEmployees(emp);
  }

  constructor(public employeeService: EmployeeService) {
    this.employees = employeeService.getEmployees();
  }

  ngOnInit(): void {
  }

}
