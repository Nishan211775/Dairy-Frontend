import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DairyLoginRoutingModule } from './dairy-login-routing.module';
import { DairyLoginComponent } from './dairy-login.component';

@NgModule({
  declarations: [DairyLoginComponent],
  imports: [
    CommonModule,
    DairyLoginRoutingModule
  ]
})
export class DairyLoginModule { }
