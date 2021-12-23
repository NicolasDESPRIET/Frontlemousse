import { Component, OnInit } from '@angular/core';
import { constantsHomeButtons, 
  constantsSharedTexts, 
  constantsAuthText,
  constantsInternWorkspace,
 } from 'src/shared/shared-text';

@Component({
  selector: 'app-internchoice',
  templateUrl: './internchoice.component.html',
  styleUrls: ['./internchoice.component.scss']
})
export class InternchoiceComponent implements OnInit {

  title = constantsSharedTexts.BRAND_NAME;
  subtitle = constantsInternWorkspace.PERSONALIZED_MSG;
  seeResultsText = constantsInternWorkspace.SEE_RESULTS;
  doQcmText = constantsInternWorkspace.DO_QCM;
  workSpace = constantsAuthText.INTERN_WORKSPACE_FLAG;

  name = "Jean-Théodule";

  constructor() { }

  ngOnInit(): void {
  }

}
