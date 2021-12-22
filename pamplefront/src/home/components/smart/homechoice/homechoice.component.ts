import { Component, OnInit } from '@angular/core';
import { constantsHomeButtons, constantsSharedTexts } from '../../../../shared/shared-text';
import { User } from 'src/models/user';


@Component({
  selector: 'app-homechoice',
  templateUrl: './homechoice.component.html',
  styleUrls: ['./homechoice.component.scss']
})
export class HomechoiceComponent implements OnInit {

  title = constantsSharedTexts.BRAND_NAME;
  subtitle = constantsSharedTexts.BRAND_SLOGAN;
  accessAdminWorkSpaceText = constantsHomeButtons.ADMIN_WORKSPACE_BTN;
  accessInternWorkSpaceText = constantsHomeButtons.INTERN_WORKSPACE_BTN;

  submitted = false;
  model = new User(); 

  constructor() { 
    // For now it is empty 
  }

  ngOnInit(): void {}

  onSubmit(){this.submitted = true}

}
