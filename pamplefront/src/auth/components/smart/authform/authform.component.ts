import { Component, Input, OnInit } from '@angular/core';
import { constantsAuthText, constantsSharedTexts, constantsAuthButtons } from '../../../../shared/shared-text';
import { UserModel } from 'src/models/user.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-authform',
  templateUrl: './authform.component.html',
  styleUrls: ['./authform.component.scss']
})
export class AuthformComponent implements OnInit {

  @Input() workSpace: string = "";

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
  // When working on auth it will be needed to use a FormGroup instead of ngModel
  //model = new UserModel(id: undefined, name: "", societe: "", ); 

  constructor(private route: ActivatedRoute) { 
    // For now it is empty 
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.workSpace = params.workspace;
    })
  }

  onSubmit(){this.submitted = true}

}
