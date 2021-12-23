import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'pamplefront';

  workSpace: string = "";

  onSelectedWorkspace(workspace: string){
    this.workSpace = workspace;
  }



}
