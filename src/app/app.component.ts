import { Component } from '@angular/core';
import { EmployeeService } from './employee/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
