import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees;
  constructor() {      
    this.employees = [
      {
        "id": 151001,
        "name": "John",
        "gender": "male",
        "skills": "ReactJS, Angular, JS",
        "project": "Cognizant Internal",
        "hcm": "Alex"
      },
      {
        "id": 151002,
        "name": "Mike",
        "gender": "male",
        "skills": "Salesforce",
        "project": "Cognizant Internal",
        "hcm": "Jones"
      },
      {
        "id": 151005,
        "name": "Sarah",
        "gender": "female",
        "skills": "Adobe",
        "project": "Cognizant CDB",
        "hcm": "Alex"
      },
      {
        "id": 151006,
        "name": "Srikanth",
        "gender": "male",
        "skills": "ReactJS, Angular, JS",
        "project": "Cognizant Internal",
        "hcm": "Alex"
      },
      {
        "id": 1510012,
        "name": "Debjoy",
        "gender": "male",
        "skills": "Salesforce",
        "project": "Cognizant Internal",
        "hcm": "Jones"
      },
      {
        "id": 1510010,
        "name": "Delfia",
        "gender": "female",
        "skills": "ReactJS, Angular, JS",
        "project": "Cognizant Internal",
        "hcm": "Alex"
      },
      {
        "id": 151008,
        "name": "Harshendu",
        "gender": "male",
        "skills": "Salesforce",
        "project": "Cognizant Internal",
        "hcm": "Jones"
      },
      {
        "id": 1510014,
        "name": "Priya",
        "gender": "female",
        "skills": "Adobe",
        "project": "Cognizant CDB",
        "hcm": "Alex"
      },
      {
        "id": 1510013,
        "name": "Sumon",
        "gender": "male",
        "skills": "ReactJS, Angular, JS",
        "project": "Cognizant Internal",
        "hcm": "Alex"
      },
      {
        "id": 1510011,
        "name": "Reeyam",
        "gender": "male",
        "skills": "Adobe",
        "project": "Cognizant CDB",
        "hcm": "Alex"
      },
      {
        "id": 1510010,
        "name": "Regina",
        "gender": "female",
        "skills": "Salesforce",
        "project": "Cognizant Internal",
        "hcm": "Jones"
      },
      {
        "id": 151007,
        "name": "Rishab",
        "gender": "male",
        "skills": "Adobe",
        "project": "Cognizant CDB",
        "hcm": "Alex"
      }
    ];
  }

  getEmployees() {
    return this.employees;
  }

  addEmployees(emp) {
    this.employees.push(emp);
    console.log(this.employees)
  }
  
  deleteEmployees(emp) {
    this.employees.splice(this.employees.indexOf(emp), 1);
  }

}
