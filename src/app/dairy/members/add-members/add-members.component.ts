import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MembersService } from 'src/app/shared/services/members.service';
import { jqxLoaderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxloader';
import { jqxNotificationComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnotification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.scss']
})
export class AddMembersComponent implements OnInit {

  @ViewChild("jqxLoader") jqxLoader: jqxLoaderComponent;
  @ViewChild("successNotification") successNotification: jqxNotificationComponent;
  @ViewChild("errorNotification") errorNotification: jqxNotificationComponent;
  private memberForm: FormGroup;
  public memberTypes: any;

  constructor(
    private fb: FormBuilder,
    private ms: MembersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildMemberForm();
    this.getMembersType();
  }

  private buildMemberForm() {
    this.memberForm = this.fb.group({
      "firstName": [null, Validators.required],
      "middleName": [null],
      "lastName": [null, Validators.required],
      "contact": [null, Validators.required],
      "memberTypeId": [0, Validators.required],
      "address": this.fb.group({
        "street": [null, Validators.required],
        "city": [null, Validators.required],
        "state": [null, Validators.required]
      })
    });
  }

  get form() { return this.memberForm.controls }
  get address() { return this.memberForm.controls.address["controls"] }

  private getMembersType() {
    this.ms.getMemberTypes().subscribe(res => {
      this.memberTypes = res;
    }, error => {
      console.log(error);
    });
  }

  public addMember(value) {
    this.jqxLoader.open();
    this.ms.addMember(value).subscribe(res => {
      this.jqxLoader.close();
      const mess = document.getElementById("success");
      mess.append("Member added succssfully");
      this.successNotification.open();
      this.router.navigate(['/dairy/members/view']);
    }, error => {
      console.log(error);
      const mess = document.getElementById("error");
      mess.append("Something went wrong");
      this.jqxLoader.close();
      this.errorNotification.open();
    });
  }

  cancel() {
    //cancel buuton
  }

}
