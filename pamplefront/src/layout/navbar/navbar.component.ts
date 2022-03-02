import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SessionManagementService } from 'src/shared/services/session-management.service';
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
  regexName: RegExp = /[A-Za-z0-9]+/i;
  regexFamilyname: RegExp = /\s[A-Za-z0-9]+/i;

  /**
   * Session variable
   * @Value can be 'intern' or 'admin'
   */
  sessionName = "";
  isUserLoggedIn = false;

  constructor(private router: Router, private dialog: MatDialog, private sessionWorker: SessionManagementService) {}

  getSessionInfo() : any{
    return this.sessionWorker._getSessionInfo();
  }

  getInitials(): any {
    let session: any = this.sessionWorker._getSessionInfo();
    let nameInitial = session.userData.name.match(this.regexName)![0][0];
    let familyNameInitial = session.userData.name.match(this.regexFamilyname)![0][1];
    return nameInitial + familyNameInitial;
  }

  ngOnInit(): void {
    console.log("session info");
    console.log(this.getSessionInfo());
  }


  onGoHome(){
    let session: any = this.sessionWorker._getSessionInfo();
    if(session.userData.type === "stagiaire") 
    {
      this.router.navigate(["/intern"]);
    }
    else if(session.userData.type === "admin") 
    {
      this.router.navigate(["/admin"]);
    }
    else
    {
      this.router.navigate(["/"]);
    }
  }

  navigateToWorkspace(){
    let session: any = this.sessionWorker._getSessionInfo();
    if(session.userData.type === "stagiaire") 
    {
      this.router.navigate(["/intern"]);
    }
    else
    {
      this.router.navigate(["/admin"]);
    }
  }

  openDecoPopup(templateRefDeco: TemplateRef<any>, templateRefDecoInQcm: TemplateRef<any>){
    if(this.router.url.match("/qcm/play/")){
      this.dialog.open(templateRefDecoInQcm, {
        minWidth: '50vw'
      });
    }else{
      this.dialog.open(templateRefDeco, {
        minWidth: '50vw'
      });
    }
  }

  logout(){
      this.sessionWorker.onLogout();
      this.isUserLoggedIn=false;
      this.router.navigate(["/"]);
  }

}
