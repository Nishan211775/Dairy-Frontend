import { Component, OnInit } from '@angular/core';
import { FarmersService } from 'src/app/shared/services/farmers.service';

@Component({
  selector: 'app-view-farmers',
  templateUrl: './view-farmers.component.html',
  styleUrls: ['./view-farmers.component.scss']
})
export class ViewFarmersComponent implements OnInit {

  private farmerList: any;

  constructor(
    private fs: FarmersService
  ) { }

  ngOnInit() {
    this.getFarmersByDairy();
  }

  private getFarmersByDairy() {
    this.fs.getFarmersByDairy().subscribe(res => {
      this.farmerList = res;
    }, error => {
      console.log(error);
    });
  }

}
