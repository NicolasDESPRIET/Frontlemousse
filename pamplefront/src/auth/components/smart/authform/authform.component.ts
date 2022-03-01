import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { constantsAuthText, constantsSharedTexts, constantsAuthButtons } from '../../../../shared/shared-text';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {UserTypeModel } from "../../../../models/type.model";
import { userList } from 'assets/fakedata';
import { Router } from '@angular/router';
import { SessionManagementService } from 'src/shared/services/session-management.service';


@Component({
  selector: 'app-authform',
  templateUrl: './authform.component.html',
  styleUrls: ['./authform.component.scss']
})
export class AuthformComponent implements OnInit {

  // Retrieve workspace name from authpage component
  // Values can be "Espace administrateur" or "Espace stagiaire"
  @Input() workSpace: string = "";

  // Text
  title = constantsSharedTexts.BRAND_NAME;
  subtitle = constantsSharedTexts.BRAND_SLOGAN;
  firstnameLabel = constantsAuthText.FIRSTNAME_LABEL;
  lastnameLabel = constantsAuthText.LASTNAME_LABEL;
  passwordLabel = constantsAuthText.PASSWORD_LABEL;
  firstnamePlaceHolder = constantsAuthText.FIRSTNAME_PLACEHOLDER;
  lastnamePlaceHolder = constantsAuthText.LASTNAME_PLACEHOLDER;
  passwordPlaceHolder = constantsAuthText.PASSWORD_PLACEHOLDER;
  connexionText = constantsAuthButtons.AUTH_CONNEXION_BUTTON_TEXT;
  stagiaireWorkSpace = constantsAuthText.INTERN_WORKSPACE_FLAG;
  adminWorkSpace = constantsAuthText.ADMIN_WORKSPACE_FLAG;

  submitted = false;
  invalidAuth = false;
  
  loginForm = new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  @Output() connectedUserEvent = new EventEmitter();

  constructor(private router: Router, private sessionWorker: SessionManagementService) { 

  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    // Format username
    let name: string = this.loginForm.value.firstname.toString() + " " + this.loginForm.value.lastname.toString().toUpperCase();
    // Get password from app
    let password: string = this.loginForm.value.password;
    // Get type from app
    let type: UserTypeModel = new UserTypeModel('');
    if(this.workSpace === "Espace administrateur"){
      type.name = "admin";
    }else{
      type.name = "stagiaire";
    }
    // Check if connexion is possible 
    this.invalidAuth = this.sessionWorker.onConnect(name, type.name, password);
  }

}
