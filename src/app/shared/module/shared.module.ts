import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { jqxPanelComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxpanel';
import { jqxInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtextarea';
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons';
import { jqxNumberInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnumberinput';
import { jqxTreeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtree';
import { jqxDataTableComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdatatable';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { jqxWindowComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow';
import { jqxDropDownListComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist';
import { jqxValidatorComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxvalidator';
import { jqxComboBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcombobox';
import { jqxDateTimeInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdatetimeinput';
import { jqxLoaderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxloader';
import { jqxNotificationComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnotification';
import { jqxTooltipComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtooltip';
import { jqxCheckBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcheckbox';
import { jqxRadioButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxradiobutton';
import { jqxListBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxlistbox';
import { jqxPasswordInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxpasswordinput';
import { jqxExpanderComponent }  from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxexpander';
import { jqxTreeGridComponent}  from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid';
import { jqxMaskedInputComponent}  from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxmaskedinput';
import { jqxTabsComponent}  from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtabs';
import { jqxLayoutComponent}  from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxlayout';
import { jqxFormComponent}  from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxform';
import { LoginComponent } from '../components/login/login.component';
import { AdminNavbarComponent } from 'src/app/admin/admin-navbar/admin-navbar.component';

@NgModule({
  declarations: [
      jqxPanelComponent,
      jqxInputComponent,
      jqxTextAreaComponent,
      jqxButtonComponent,
      jqxWindowComponent,
      jqxTreeComponent,
      jqxDataTableComponent,
      jqxGridComponent,
      jqxValidatorComponent,
      jqxNumberInputComponent,
      jqxDropDownListComponent,
      jqxComboBoxComponent,
      jqxDateTimeInputComponent,
      jqxLoaderComponent,
      jqxNotificationComponent,
      jqxTooltipComponent,
      jqxCheckBoxComponent,
      jqxRadioButtonComponent,
      jqxListBoxComponent,
      jqxPasswordInputComponent,
      jqxExpanderComponent,
      jqxTreeGridComponent,
      jqxMaskedInputComponent,
      jqxTabsComponent,
      jqxLayoutComponent,
      jqxFormComponent,
      LoginComponent,
      AdminNavbarComponent
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
   ],
  providers: [
    
   ],
  exports: [
    FormsModule,
    AdminNavbarComponent,
    CommonModule,
    ReactiveFormsModule,
    jqxPanelComponent,
    jqxInputComponent,
    jqxTextAreaComponent,
    jqxButtonComponent,
    jqxTreeComponent,
    jqxDataTableComponent,
    jqxGridComponent,
    jqxWindowComponent,
    jqxDropDownListComponent,
    jqxValidatorComponent,
    jqxNumberInputComponent,
    jqxComboBoxComponent,
    jqxDateTimeInputComponent,
    jqxLoaderComponent,
    jqxNotificationComponent,
    jqxTooltipComponent,
    jqxCheckBoxComponent,
    jqxRadioButtonComponent,
    jqxListBoxComponent,
    jqxPasswordInputComponent,
    jqxExpanderComponent,
    jqxTreeGridComponent,
    jqxMaskedInputComponent,
    jqxTabsComponent,
    jqxLayoutComponent,
    jqxFormComponent,
    LoginComponent
  ]
})

export class SharedModule { }