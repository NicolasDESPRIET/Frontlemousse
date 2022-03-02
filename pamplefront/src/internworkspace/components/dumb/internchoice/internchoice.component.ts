import { Component, OnInit } from '@angular/core';
import { constantsHomeButtons, 
  constantsSharedTexts, 
  constantsAuthText,
  constantsInternWorkspace,
 } from 'src/shared/shared-text';
 import { ViewportScroller } from '@angular/common';
import { SessionManagementService } from 'src/shared/services/session-management.service';

@Component({
  selector: 'app-internchoice',
  templateUrl: './internchoice.component.html',
  styleUrls: ['./internchoice.component.scss']
})
export class InternchoiceComponent implements OnInit {

  title = constantsSharedTexts.BRAND_NAME;
  subtitle = constantsInternWorkspace.PERSONALIZED_MSG;
  descriptionText = constantsInternWorkspace.DESCRIPTION_TEXT;
  seeQcmsText = constantsInternWorkspace.SEE_QCMS_TEXT;
  workSpace = constantsAuthText.INTERN_WORKSPACE_FLAG;

  regexName: RegExp = /[A-Za-z]+/i;

  constructor(private sessionWorker: SessionManagementService) { }

  ngOnInit(): void {
  }
  encode(url: string){
    return encodeURI(url);
  }

  getStagiaireName() :any {
    let session: any = this.sessionWorker._getSessionInfo()
    return session.userData.name.match(this.regexName)![0]
  }


}
