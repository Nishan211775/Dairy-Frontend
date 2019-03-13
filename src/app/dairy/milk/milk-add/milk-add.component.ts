import { Component, OnInit, ViewChild } from '@angular/core';
import { FarmersService } from 'src/app/shared/services/farmers.service';
import { DateConverter } from '../../../../assets/js/dateconverter';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MilkService } from 'src/app/shared/services/milk.service';
import { jqxLoaderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxloader';
import { jqxNotificationComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnotification';
import { ad2bs } from 'ad-bs-converter';

@Component({
  selector: 'app-milk-add',
  templateUrl: './milk-add.component.html',
  styleUrls: ['./milk-add.component.scss']
})
export class MilkAddComponent implements OnInit {

  @ViewChild("jqxLoader") jqxLoader: jqxLoaderComponent;
  @ViewChild("successNotification") successNotification: jqxNotificationComponent;
  @ViewChild("errorNotification") errorNotification: jqxNotificationComponent;
  public farmersList: any;
  public milkForm: FormGroup;
  public todayNepaliDate: any;

  constructor(
    private fs: FarmersService,
    private fb: FormBuilder,
    private ms: MilkService
  ) { }

  ngOnInit() {
    this.getAllMembers();
    this.buildMilkForm();
    this.todayNepaliDate = ad2bs(this.getTodayDate());
  }

  private getTodayDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var todayDate = year + "/" + month + "/" + day;

    return todayDate;
  }

  private buildMilkForm() {
    this.milkForm = this.fb.group({
      "milk": this.fb.array([
      ])
    });
  }

  private initMilkForm() {
    return this.fb.group({
      farmerId: [0, Validators.required],
      milk: [0, Validators.required],
      fat: [0, Validators.required],
      date: [null, Validators.required]
    });
  }

  private getAllMembers() {
    this.fs.getFarmersByDairy().subscribe((res: any) => {
      this.farmersList = res;
      var num = 0;
      res.forEach(element => {
        const control = <FormArray>this.milkForm.controls['milk'];
        control.push(this.initMilkForm());
        control.controls[num].get('farmerId').patchValue(element['id']);
        var date = this.todayNepaliDate['en']['year'] + "/" + this.todayNepaliDate['en']['month'] + "/" + this.todayNepaliDate['en']['day'];
        control.controls[num].get('date').patchValue(date);
        num++;
      });
    }, error => {
      console.log(error);
    });
  }

  save(value) {
    this.jqxLoader.open();
    this.ms.addMilk(value['milk']).subscribe(res => {
      this.jqxLoader.close();
      const mess = document.getElementById("success");
      mess.append("Milk added succssfully");
      this.successNotification.open();
    }, error => {
      console.log(error);
      const mess = document.getElementById("error");
      mess.append("Something went wrong");
      this.jqxLoader.close();
      this.errorNotification.open();
    });
  }

  cancel() {

  }

}
