import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservablesModule } from './observables/observables.module';
import { MainFormModule } from './main-form/main-form.module';
import { FormsModule } from '@angular/forms';
import { EmployeeModule } from './employee/employee.module';

@NgModule({
  declarations: [
    KeyObject,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ObservablesModule,
    MainFormModule,
    EmployeeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
