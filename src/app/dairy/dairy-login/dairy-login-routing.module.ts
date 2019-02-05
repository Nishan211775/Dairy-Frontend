import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DairyLoginComponent } from './dairy-login.component';

const routes: Routes = [
  {
    path: "",
    component: DairyLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DairyLoginRoutingModule { }
