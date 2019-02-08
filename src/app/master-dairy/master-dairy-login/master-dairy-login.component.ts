import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { jqxLoaderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxloader';
import { jqxNotificationComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnotification';

@Component({
  selector: 'app-master-dairy-login',
  templateUrl: './master-dairy-login.component.html',
  styleUrls: ['./master-dairy-login.component.scss']
})
export class MasterDairyLoginComponent implements OnInit {
  public loginType = "master-dairy";
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
