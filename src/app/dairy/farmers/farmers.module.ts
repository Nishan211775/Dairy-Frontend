import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmersRoutingModule } from './farmers-routing.module';
import { AddFarmersComponent } from './add-farmers/add-farmers.component';
import { EditFarmersComponent } from './edit-farmers/edit-farmers.component';
import { ViewFarmersComponent } from './view-farmers/view-farmers.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [AddFarmersComponent, EditFarmersComponent, ViewFarmersComponent],
  imports: [
    CommonModule,
    SharedModule,
    FarmersRoutingModule
  ]
})
export class FarmersModule { }
