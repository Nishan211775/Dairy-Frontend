import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFarmersComponent } from './add-farmers/add-farmers.component';
import { EditFarmersComponent } from './edit-farmers/edit-farmers.component';
import { ViewFarmersComponent } from './view-farmers/view-farmers.component';

const routes: Routes = [
  {
    path: "add",
    component: AddFarmersComponent
  },
  {
    path: "edit",
    component: EditFarmersComponent
  },
  {
    path: "view",
    component: ViewFarmersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmersRoutingModule { }
