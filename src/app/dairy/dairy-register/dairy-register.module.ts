import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DairyRegisterRoutingModule } from './dairy-register-routing.module';
import { DairyRegisterComponent } from './dairy-register.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [DairyRegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    DairyRegisterRoutingModule
  ]
})
export class DairyRegisterModule { }
