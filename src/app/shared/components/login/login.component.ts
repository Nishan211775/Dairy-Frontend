import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() type: string;
  public loginType: string;

  constructor() { }

  ngOnInit() {
    if (this.type == "admin") {
      this.loginType = "Admin";
    } else if(this.type == "farmer") {
      this.loginType = "Farmer"
    } else if(this.type == "dairy") {
      this.loginType = "Dairy";
    } else if(this.type == "master-dairy") {
      this.loginType = "Master Dairy"
    }
  }
}
