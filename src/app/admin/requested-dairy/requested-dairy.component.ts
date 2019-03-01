import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { DairyService } from 'src/app/shared/services/dairy.service';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { jqxWindowComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { jqxLoaderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxloader';
import { jqxNotificationComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnotification';

@Component({
  selector: 'app-requested-dairy',
  templateUrl: './requested-dairy.component.html',
  styleUrls: ['./requested-dairy.component.scss']
})
export class RequestedDairyComponent implements OnInit {

  @ViewChild("grid") grid: jqxGridComponent;
  @ViewChild("window") window: jqxWindowComponent;
  @ViewChild("jqxLoader") jqxLoader: jqxLoaderComponent;
  @ViewChild("successNotification") successNotification: jqxNotificationComponent;
  @ViewChild("errorNotification") errorNotification: jqxNotificationComponent;
  public credential: FormGroup;
  public rowData: any;
  public dairyCount = 0;
  // collection = [];

  constructor(
    private ds: DairyService,
    private fb: FormBuilder
  ) {
    // for (let i = 1; i <= 100; i++) {
    //   this.collection.push(`item ${i}`);
    // }
  }

  ngOnInit() {
    this.buildGenerateCredentialForDairy();
    this.getRequestedDairyList();
    //this.getRequestedDairyCount();
  }

  private buildGenerateCredentialForDairy() {
    this.credential = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      email: [null, Validators.required],
      dairyId: [0, Validators.required],
    });
  }

  get form() { return this.credential.controls }

  private getRequestedDairyList() {
    this.ds.getAllRequestedDairy(1, 10).subscribe(res => {
      this.source.localdata = res;
      this.grid.updatebounddata();
    }, error => {
      console.log(error);
    });
  }

  public getRequestedDairyCount() {
    this.ds.getRequestedDairyCount().subscribe((res: any) => {
      this.dairyCount = res;
    }, error => {
      console.log(error);
    })
  }

  source: any =
    {
      dataType: 'array',
      dataFields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string', width: 200 },
        { name: 'contact', type: 'string', width: 200 },
        { name: 'email', type: 'string', width: 200 },
        { name: 'website', type: 'string', width: 200 },
        { name: 'addedDate', type: 'date', width: 200 },
        { name: 'street', type: 'string', map: 'address>street', width: 200 },
        { name: 'city', type: 'string', map: 'address>city', width: 200 },
        { name: 'state', type: 'string', map: 'address>state', width: 200 }
      ],
      localdata: []
    };

  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] =
    [
      { text: 'Dairy Name', dataField: 'name' },
      { text: 'Contact', dataField: 'contact' },
      { text: 'Email', cellsAlign: 'email' },
      { text: 'Website', dataField: 'website' },
      { text: 'Added Date', dataField: 'addedDate' },
      { text: 'Street', dataField: 'street' },
      { text: 'City', dataField: 'city' },
      { text: 'State', dataField: 'state' },
      {
        text: 'Action', columntype: 'button', align: 'center', filterable: false, sortable: false, cellsrenderer: (): string => {
          return "View";
        }, buttonClick: (row: number): void => {
          this.rowData = this.grid.getrowdata(row);
          this.credential.get('email').patchValue(this.rowData.email);
          this.credential.get('dairyId').patchValue(this.rowData.id);
          this.window.open();
        }
      },
    ];

  approveDairy(value) {
    if (confirm("Are you sure want to confirm the request?")) {
      this.jqxLoader.open();
      this.ds.acceptDairyRequest(value).subscribe(res => {
        this.getRequestedDairyList();
        this.jqxLoader.close();
        this.successNotification.open();
      }, error => {
        this.jqxLoader.close();
        this.errorNotification.open();
        console.log(error);
      })
    }
  }
}
