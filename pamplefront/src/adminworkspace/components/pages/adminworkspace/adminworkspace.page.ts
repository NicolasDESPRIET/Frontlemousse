import { Component, OnInit } from '@angular/core';
import { constantsAdminWorkspace } from 'src/shared/shared-text';

@Component({
  selector: 'app-adminworkspace',
  templateUrl: './adminworkspace.page.html',
  styleUrls: ['./adminworkspace.page.scss']
})
export class AdminworkspacePage implements OnInit {

  // Text constants
  manageInternsText = constantsAdminWorkspace.MANAGE_USER;
  manageQcmText = constantsAdminWorkspace.MANAGE_QCM;
  
  // Nav management
  navStatus = 0;

  constructor() { }

  ngOnInit(): void {
  }

  navManagement(index: number): void{
    this.navStatus = index;
  }
}
