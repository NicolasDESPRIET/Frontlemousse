import { Component, OnInit } from '@angular/core';
import { constantsHomeButtons, 
  constantsSharedTexts, 
  constantsAuthText,
  constantsInternWorkspace,
 } from 'src/shared/shared-text';
 import { ViewportScroller } from '@angular/common';

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

  name = "Jean-Théodule";

  constructor() { }

  ngOnInit(): void {
  }


}
