import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.scss']
})
export class AddMembersComponent implements OnInit {

  private memberForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildMemberForm();
  }

  private buildMemberForm() {
    this.memberForm = this.fb.group({
      "firstName": [null, Validators.required],
      "middleName": [null, Validators.required],
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

  public addMember(value) {
    console.log(value);
  }

  cancel() {
    //cancel buuton
  }

}
