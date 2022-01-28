import { Component, OnInit } from '@angular/core';
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


  constructor() { }

  ngOnInit(): void {
  }

}
