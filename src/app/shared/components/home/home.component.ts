import { Component, OnInit, ViewChild } from '@angular/core';
import { jqxDropDownListComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist';
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild("dropdown") dropdown: jqxDropDownListComponent;
  @ViewChild("button") button: jqxButtonComponent;

  source: string[] = [
    "Choose a user type",
    "Farmer",
    "Dairy",
    "Admin",
    "MasterDairy"
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  buttonClicked() {
    var value = this.dropdown.val();
    if (value == "Farmer") {
      this.router.navigate(["/farmer/farmer-login"]);
    } else if (value == "Dairy") {
      this.router.navigate(["/dairy/dairy-login"]);
    } else if (value == "MasterDairy") {
      this.router.navigate(["/master/master-login"]);
    } else if (value == "Admin") {
      this.router.navigate(["/admin/admin-login"]);
    }
  }

}
