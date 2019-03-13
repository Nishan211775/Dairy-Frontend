import { Component, OnInit, ViewChild } from '@angular/core';
import { jqxLoaderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxloader';
import { jqxNotificationComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnotification';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FarmersService } from 'src/app/shared/services/farmers.service';

@Component({
  selector: 'app-add-farmers',
  templateUrl: './add-farmers.component.html',
  styleUrls: ['./add-farmers.component.scss']
})
export class AddFarmersComponent implements OnInit {

  @ViewChild("jqxLoader") jqxLoader: jqxLoaderComponent;
  @ViewChild("successNotification") successNotification: jqxNotificationComponent;
  @ViewChild("errorNotification") errorNotification: jqxNotificationComponent;
  private farmerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private fs: FarmersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildFarmerForm();
  }

  private buildFarmerForm() {
    this.farmerForm = this.fb.group({
      "firstName": [null, Validators.required],
      "middleName": [null],
      "lastName": [null, Validators.required],
      "contact": [null, Validators.required],
      "canId": [0, Validators.required],
      "address": this.fb.group({
        "street": [null, Validators.required],
        "city": [null, Validators.required],
        "state": [null, Validators.required]
      })
    });
  }

  get form() { return this.farmerForm.controls }
  get address() { return this.farmerForm.controls.address["controls"] }

  addMember(value) {
    this.jqxLoader.open();
    this.fs.addFarmers(value).subscribe(res => {
      const message = document.getElementById("error");
      message.innerText = "Farmer added successfully";
      this.jqxLoader.close();
      this.router.navigate(['/dairy/farmers/view']);
    }, error => {
      const message = document.getElementById("error");
      message.innerText = "Something went wrong";
      this.jqxLoader.close();
    });
  }

}
