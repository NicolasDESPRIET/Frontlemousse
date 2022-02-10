import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { constantsSharedTexts, constantsSharedButtons } from 'src/shared/shared-text';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // Text
  titleNav = constantsSharedTexts.BRAND_NAME;
  navBackHomeText = constantsSharedButtons.BACK_HOME_BUTTON;
  regexName: RegExp = /[A-Za-z]+/i;
  regexFamilyname: RegExp = /\s[A-Za-z]+/i;

  /**
   * Session variable
   * @Value can be 'intern' or 'admin'
   */
  session = "intern";
  sessionName = "";

  userName: string = "Maurice HELLOWORLD";
  isUserLoggedIn = true;
  
  nameInitial = this.userName.match(this.regexName)![0][0];
  familyNameInitial = this.userName.match(this.regexFamilyname)![0][1];
  initials: string =  this.nameInitial + this.familyNameInitial;

  constructor(private router: Router, private dialog: MatDialog) {
    // Empty
  }

  ngOnInit(): void {
    if(this.session === "intern") 
    {this.sessionName = "stagiaire"}
    else
    {this.sessionName = "administrateur"}
  }

  navigateToWorkspace(){
    if(this.session === "intern") 
    {
      this.router.navigate(["/intern"]);
    }
    else
    {
      this.router.navigate(["/admin"]);
    }
  }

  openDecoPopup(templateRef: TemplateRef<any>){
    this.dialog.open(templateRef, {
      minWidth: '50vw'
    });
  }

  logout(){
    this.router.navigate(["/auth"])
    // When auth is done it will be needed to uncomment the code below
    //this.isUserLoggedIn = false;

  }

}
