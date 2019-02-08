import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { jqxLoaderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxloader';
import { jqxNotificationComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnotification';

@Component({
  selector: 'app-farmer-login',
  templateUrl: './farmer-login.component.html',
  styleUrls: ['./farmer-login.component.scss']
})
export class FarmerLoginComponent implements OnInit {
  public loginType = "farmer";

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
