import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dairy-login',
  templateUrl: './dairy-login.component.html',
  styleUrls: ['./dairy-login.component.scss']
})
export class DairyLoginComponent implements OnInit {
  public loginType = "dairy";

  constructor() { }

  ngOnInit() {
  }

}
