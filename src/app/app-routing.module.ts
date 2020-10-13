import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpComponent } from './emp/emp.component';
import { MainFormComponent } from './main-form/main-form.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: '', component: EmpComponent },
  { path: 'observables', component: ParentComponent },
  { path: 'forms', component: MainFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
