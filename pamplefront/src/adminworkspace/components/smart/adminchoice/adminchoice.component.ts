import { Component, OnInit } from '@angular/core';
import { SessionManagementService } from 'src/shared/services/session-management.service';
import { constantsAdminWorkspace, constantsAuthText, constantsHomeButtons, constantsSharedTexts } from 'src/shared/shared-text';

@Component({
  selector: 'app-adminchoice',
  templateUrl: './adminchoice.component.html',
  styleUrls: ['./adminchoice.component.scss']
})
export class AdminchoiceComponent implements OnInit {

  // Texts
  // ------------------
  title = constantsSharedTexts.BRAND_NAME;
  subtitle = constantsAdminWorkspace.PERSONALIZED_MSG;
  name = "Jean-Maurice";
  workSpace = constantsAuthText.ADMIN_WORKSPACE_FLAG;
  descriptionText = constantsAdminWorkspace.DESCRIPTION_TEXT;
  seeQcmsText = constantsAdminWorkspace.SEE_QCMS_TEXT;
  regexName: RegExp = /[A-Za-z0-9]+/i;

  constructor(private sessionWorker: SessionManagementService) { }

  ngOnInit(): void {
  }

  getAdminName() :any {
    let session: any = this.sessionWorker._getSessionInfo()
    return session.userData.name.match(this.regexName)![0]
  }

}
