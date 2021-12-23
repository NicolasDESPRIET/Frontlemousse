import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { constantsHomeButtons, constantsSharedTexts } from '../../../../shared/shared-text';


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

  @Output() selectedWorkspace = new EventEmitter<string>();
  @Input('workSpace') workSpace: string = "";
  
  constructor() { 
    // For now it is empty 
  }

  ngOnInit(): void {}

  onSelectWorkSpace(workSpace: string){
    //this.workSpace = ($event.target as HTMLInputElement).value ;
    this.selectedWorkspace.emit(workSpace)
  }
  

}
