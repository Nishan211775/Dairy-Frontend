import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MilkRoutingModule } from './milk-routing.module';
import { MilkAddComponent } from './milk-add/milk-add.component';
import { MilkViewComponent } from './milk-view/milk-view.component';
import { MilkEditComponent } from './milk-edit/milk-edit.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [MilkAddComponent, MilkViewComponent, MilkEditComponent],
  imports: [
    CommonModule,
    SharedModule,
    MilkRoutingModule
  ]
})
export class MilkModule { }
