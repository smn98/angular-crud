import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { EmployeeService } from './employee.service';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { Sibling1Component } from './parent/sibling1/sibling1.component';
import { Sibling2Component } from './parent/sibling2/sibling2.component';
import { SharedService } from './parent/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableHeaderComponent,
    TableBodyComponent,
    AddEmpComponent,
    ParentComponent,
    Sibling1Component,
    Sibling2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
