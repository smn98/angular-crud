import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservablesComponent } from './observables.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ObservablesRoutingModule } from './observables-routing.module';
import { SharedService } from './shared.service';


@NgModule({
  declarations: [
    Sibling1Component,
    Sibling2Component,
    ObservablesComponent
  ],
  // exports: [
  //   Sibling1Component,
  //   Sibling2Component,
  //   ObservablesComponent
  // ],
  providers: [SharedService],
  imports: [
    CommonModule,
    ObservablesRoutingModule
  ]
})
export class ObservablesModule { }
