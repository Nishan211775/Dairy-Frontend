import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MilkAddComponent } from './milk-add/milk-add.component';
import { MilkViewComponent } from './milk-view/milk-view.component';
import { MilkEditComponent } from './milk-edit/milk-edit.component';

const routes: Routes = [
  {
    path: "add",
    component: MilkAddComponent
  },
  {
    path: "view",
    component: MilkViewComponent
  },
  {
    path: "edit",
    component: MilkEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MilkRoutingModule { }
