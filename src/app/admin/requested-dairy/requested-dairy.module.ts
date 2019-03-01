import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestedDairyRoutingModule } from './requested-dairy-routing.module';
import { RequestedDairyComponent } from './requested-dairy.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [RequestedDairyComponent],
  imports: [
    CommonModule,
    SharedModule,
    RequestedDairyRoutingModule
  ]
})
export class RequestedDairyModule { }
