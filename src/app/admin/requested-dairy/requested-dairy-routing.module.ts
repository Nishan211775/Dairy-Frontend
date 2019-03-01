import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestedDairyComponent } from './requested-dairy.component';

const routes: Routes = [
  {
    path: "",
    component: RequestedDairyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestedDairyRoutingModule { }
