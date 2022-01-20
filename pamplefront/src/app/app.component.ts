import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'pamplefront';

  workSpace: string = "app comp";

  onSelectedWorkspace(event: Event){
    this.workSpace = (event.target as HTMLInputElement).value;
  }



}
