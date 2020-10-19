import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainFormRoutingModule } from './main-form-routing.module';
import { MainFormComponent } from './main-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MainFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainFormRoutingModule
  ]
})
export class MainFormModule { }
