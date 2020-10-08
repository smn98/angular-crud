import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  empID;
  empName;
  gender;
  skills;
  project;
  hcm;


  addEmp() {
    let emp = {
      id: this.empID,
      name: this.empName,
      gender: this.gender,
      skills: this.skills,
      project: this.project,
      hcm: this.hcm
    }
    console.log(emp);
    this.employeeService.addEmployeeSubject.next(emp);
  }



  ngOnInit(): void {
  }

}
