import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/shared/services/members.service';

@Component({
  selector: 'app-view-members',
  templateUrl: './view-members.component.html',
  styleUrls: ['./view-members.component.scss']
})
export class ViewMembersComponent implements OnInit {

  public memberList: any;

  constructor(
    private ms: MembersService
  ) { }

  ngOnInit() {
    this.getMembersByDairy();
  }

  private getMembersByDairy() {
    this.ms.getMembers().subscribe(res => {
      this.memberList = res;
    }, error => {
      console.log(error);
    })
  }

}
