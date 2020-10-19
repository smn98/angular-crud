import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  gender;

  constructor(private employeeService: EmployeeService){}
  
  filter(){
    if(this.gender){
      this.employeeService.updateEmployeeSubject.next(this.gender);
    }
    else {
      alert("Please select one option!")
    }
  }

}
