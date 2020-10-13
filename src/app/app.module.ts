import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './emp/employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { Sibling1Component } from './parent/sibling1/sibling1.component';
import { Sibling2Component } from './parent/sibling2/sibling2.component';
import { SharedService } from './parent/shared.service';
import { EmpComponent } from './emp/emp.component';
import { TableComponent } from './emp/table/table.component';
import { TableHeaderComponent } from './emp/table-header/table-header.component';
import { TableBodyComponent } from './emp/table-body/table-body.component';
import { AddEmpComponent } from './emp/add-emp/add-emp.component';
import { MainFormComponent } from './main-form/main-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableHeaderComponent,
    TableBodyComponent,
    AddEmpComponent,
    ParentComponent,
    Sibling1Component,
    Sibling2Component,
    EmpComponent,
    MainFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
