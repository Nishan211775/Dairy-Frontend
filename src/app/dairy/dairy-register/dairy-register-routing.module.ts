import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DairyRegisterComponent } from './dairy-register.component';

const routes: Routes = [
  {
    path: "",
    component: DairyRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DairyRegisterRoutingModule { }
