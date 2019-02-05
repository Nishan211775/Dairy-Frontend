import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer-login',
  templateUrl: './farmer-login.component.html',
  styleUrls: ['./farmer-login.component.scss']
})
export class FarmerLoginComponent implements OnInit {
  public loginType = "farmer";

  constructor() { }

  ngOnInit() {
  }

}
