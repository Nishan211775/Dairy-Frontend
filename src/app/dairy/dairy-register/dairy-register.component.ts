import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DairyService } from 'src/app/shared/services/dairy.service';
import { jqxNotificationComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnotification';
import { jqxLoaderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxloader';

@Component({
  selector: 'app-dairy-register',
  templateUrl: './dairy-register.component.html',
  styleUrls: ['./dairy-register.component.scss']
})
export class DairyRegisterComponent implements OnInit {

  public dairyRegisterForm: FormGroup;
  @ViewChild("notification") notification: jqxNotificationComponent;
  @ViewChild("sucNotification") sucNotification: jqxNotificationComponent;
  @ViewChild("jqxLoader") jqxLoader: jqxLoaderComponent;

  constructor(
    private fb: FormBuilder,
    private ds: DairyService
  ) { }

  ngOnInit() {
    this.createDairyRegisterForm();
  }

  private createDairyRegisterForm() {
    this.dairyRegisterForm = this.fb.group({
      "name": [null, Validators.required],
      "email": [null, Validators.required],
      "contact": [null, Validators.required],
      "website": [null],
      "address": this.fb.group({
        "street": [null, Validators.required],
        "city": [null, Validators.required],
        "state": [null, Validators.required]
      })
    });
  }

  get form() { return this.dairyRegisterForm.controls }
  get address() { return this.dairyRegisterForm.controls.address["controls"] }

  requestForRegistration(value) {
    this.jqxLoader.open();
    this.ds.addNewDairy(value).subscribe(res => {
      this.jqxLoader.close();
      this.dairyRegisterForm.reset();
      let messageDiv: any = document.getElementById("sucMes");
      messageDiv.innerText = "Requested for activation.";
      this.sucNotification.open();
    }, error => {
      console.log(error);
      this.jqxLoader.close();
      let messageDiv: any = document.getElementById("errMess");
      messageDiv.innerText = "Something went wrong please try again!";
      this.notification.open();
    });
  }

}
