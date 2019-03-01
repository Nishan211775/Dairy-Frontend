import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { ViewMembersComponent } from './view-members/view-members.component';
import { EditMembersComponent } from './edit-members/edit-members.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { AddMembersComponent } from './add-members/add-members.component';

@NgModule({
  declarations: [ViewMembersComponent, EditMembersComponent, AddMembersComponent],
  imports: [
    CommonModule,
    SharedModule,
    MembersRoutingModule
  ]
})
export class MembersModule { }
