import { Component, OnInit } from '@angular/core';
import { constantsSharedTexts, constantsSharedButtons } from 'src/shared/shared-text';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  titleNav = constantsSharedTexts.BRAND_NAME;
  navBackHomeText = constantsSharedButtons.BACK_HOME_BUTTON;

  constructor() {
    // Empty
  }
  
  ngOnInit(): void {
  }

}
