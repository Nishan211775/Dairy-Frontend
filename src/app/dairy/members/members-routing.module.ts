import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewMembersComponent } from './view-members/view-members.component';
import { EditMembersComponent } from './edit-members/edit-members.component';
import { AddMembersComponent } from './add-members/add-members.component';

const routes: Routes = [
  {
    path: "view",
    component: ViewMembersComponent
  },
  {
    path: "edit/:id",
    component: EditMembersComponent
  },
  {
    path: "add",
    component: AddMembersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
