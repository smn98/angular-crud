import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {

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
