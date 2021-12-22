import { Component, OnInit } from '@angular/core';
import { constantsAuthText, constantsSharedTexts, constantsAuthButtons } from '../../../../shared/shared-text';
import { User } from 'src/models/user';


@Component({
  selector: 'app-authform',
  templateUrl: './authform.component.html',
  styleUrls: ['./authform.component.scss']
})
export class AuthformComponent implements OnInit {

  title = constantsSharedTexts.BRAND_NAME;
  subtitle = constantsSharedTexts.BRAND_SLOGAN;
  usernameLabel = constantsAuthText.USERNAME_LABEL;
  passwordLabel = constantsAuthText.PASSWORD_LABEL;
  usernamePlaceHolder = constantsAuthText.USERNAME_PLACEHOLDER;
  passwordPlaceHolder = constantsAuthText.PASSWORD_PLACEHOLDER;
  connexionText = constantsAuthButtons.AUTH_CONNEXION_BUTTON_TEXT;
  stagiaireWorkSpace = constantsAuthText.INTERN_WORKSPACE_FLAG;
  adminWorkSpace = constantsAuthText.ADMIN_WORKSPACE_FLAG;

  submitted = false;
  model = new User(); 

  constructor() { 
    // For now it is empty 
  }

  ngOnInit(): void {}

  onSubmit(){this.submitted = true}

}
