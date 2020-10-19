import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
  { path: 'observables', loadChildren: () => import('./observables/observables.module').then(m => m.ObservablesModule) },
  { path: 'forms', loadChildren: () => import('./main-form/main-form.module').then(m => m.MainFormModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
