import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NepaliDate, DateFormatter } from 'angular-nepali-datepicker';
import { MilkPriceService } from 'src/app/shared/services/milk-price.service';
import { jqxLoaderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxloader';
import { jqxNotificationComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnotification';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
  selector: 'app-dairy-dashboard',
  templateUrl: './dairy-dashboard.component.html',
  styleUrls: ['./dairy-dashboard.component.scss'],
})
export class DairyDashboardComponent implements OnInit {

  private milkPriceForm: FormGroup;
  @ViewChild("todayDate") todayDate: any;
  public dashboard: any;
  public price: any;
  @ViewChild("jqxLoader") jqxLoader: jqxLoaderComponent;
  @ViewChild("successNotification") successNotification: jqxNotificationComponent;
  @ViewChild("errorNotification") errorNotification: jqxNotificationComponent;
  public isUpdate: boolean = false;
  
  constructor(
    private fb: FormBuilder,
    private mps: MilkPriceService,
    private ds: DashboardService
  ) { }


  ngOnInit() {
    this.buildForm();
    this.getDairyDashboard();
  }

  private buildForm() {
    this.milkPriceForm = this.fb.group({
      id: [0],
      startDate: [null, Validators.required],
      price: [0, Validators.required],
    });
  }

  private getDairyDashboard() {
    this.ds.getDairyDashboard().subscribe(res => {
      this.dashboard = res;
      this.milkPriceForm.get('id').patchValue(res['id']);
      this.price = res['milkPrice'];
    }, error => {
      console.log(error);
    })
  }

  go(value) {
    this.jqxLoader.open();
    var date = value['startDate']['year'] + "/" + value['startDate']['month'] + "/" + value['startDate']['day'];
    value['startDate'] = date;
    this.mps.addMilkPrice(value).subscribe(res => {
      this.price = res;
      this.jqxLoader.close();
      const mess = document.getElementById("success");
      mess.innerText = "Price added successfully";
      this.successNotification.open();
      this.todayDate.close();
      this.milkPriceForm.reset();
    }, error => {
      console.log(error);
      this.jqxLoader.close();
      const mess = document.getElementById("error");
      mess.innerText = "Something went wrong";
      this.errorNotification.open();
    });
  }

  edit() {
    this.milkPriceForm.get('price').patchValue(this.price['price']);
    this.milkPriceForm.get('id').patchValue(this.price['id']);
    var date = {
      year: new Date(this.price['startDate']).getFullYear(),
      month: new Date(this.price['startDate']).getMonth() + 1,
      day: new Date(this.price['startDate']).getDate()
    };
    this.milkPriceForm.get('startDate').patchValue(date);
    this.isUpdate = true;
  }

  update(value) {
    this.jqxLoader.open();
    var date = value['startDate']['year'] + "/" + value['startDate']['month'] + "/" + value['startDate']['day'];
    value['startDate'] = date;
    this.mps.updateMilkPrice(value).subscribe(res => {
      this.price = res;
      this.jqxLoader.close();
      const mess = document.getElementById("success");
      mess.innerText = "Price updated successfully";
      this.successNotification.open();
      this.todayDate.close();
      this.milkPriceForm.reset();
    }, error => {
      console.log(error);
      this.jqxLoader.close();
      const mess = document.getElementById("error");
      mess.innerText = "Something went wrong";
      this.errorNotification.open();
    });
  }

  cancel() {
    this.isUpdate = false;
    this.milkPriceForm.reset();
  }
}
