import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url);
    if(this.router.url === "/admin/manage/qcms"){
      this.navStatus = 1;
    }else{
      this.navStatus = 0;
    }
  }

  navManagement(index: number): void{
    this.navStatus = index;
  }
}
