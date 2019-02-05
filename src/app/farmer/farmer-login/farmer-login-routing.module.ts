import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmerLoginComponent } from './farmer-login.component';

const routes: Routes = [
  {
    path: "",
    component: FarmerLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerLoginRoutingModule { }
