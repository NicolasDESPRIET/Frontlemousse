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
    let password: string = this.loginForm.value.password;
    let type: UserTypeModel = new UserTypeModel('');

    if(this.workSpace === "Espace administrateur"){
      type.name = "admin";
    }else{
      type.name = "intern";
    }
    const data = {
      'name': name,
      'password' : password,
      'type' : type 
    }
    console.log("Data:\n");
    console.log(data);
    // Send request to back for authentication 
    // then I want a key or something and return an event that will
    // trigger a switch in the top component (app)
    // i need a method like 
    // this.serviceAuth.login(type, username, password)
    // The method will check if there is a user in the corresponding type
    // then return something 
    // if it is OK i will navigate to the right place
    // if no it will display something
    
    // TEST USER

    // filter by type
    const filteredUserList = userList.filter(item => item.type.name == data.type.name);
    console.log(filteredUserList);
    if(filteredUserList.some(element => element.name == data.name && element.password == data.password)){
      let connectedUser = filteredUserList.find(element => element.name == data.name && element.password == data.password);
      console.log("Connected !");
      console.log(connectedUser);
      this.sessionWorker._setUserSession(connectedUser!);
      this.sessionWorker._setIsConnected(true);
      switch(connectedUser?.type.name){
        case "admin":
          this.router.navigate(["/admin"]);
          break;
        case "intern":
          this.router.navigate(["/intern"]);
          break;
        default:
          console.log("ERROR");
      }      
    }else{
      console.log("FAILED !");
      this.invalidAuth = true;
    }


  }

}
