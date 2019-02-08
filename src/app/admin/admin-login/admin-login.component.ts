import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { jqxLoaderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxloader';
import { jqxNotificationComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnotification';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  public loginType = "admin";

  @ViewChild("jqxLoader") jqxLoader: jqxLoaderComponent;
  @ViewChild("successNotification") successNotification: jqxNotificationComponent;
  @ViewChild("errorNotification") errorNotification: jqxNotificationComponent;

  ngOnInit() {
  }

  receiveMessage($event) {
    if ($event == "true") {
      this.jqxLoader.open();
    } else {
      this.jqxLoader.close();
    }
  }

  receiveLoginCredentialEvent($event) {
    if ($event == "true") {
      this.successNotification.open();
    } else {
      this.errorNotification.open();
    }
  }

 
}
