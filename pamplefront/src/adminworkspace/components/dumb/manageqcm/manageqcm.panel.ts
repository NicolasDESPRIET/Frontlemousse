import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manageqcm',
  templateUrl: './manageqcm.panel.html',
  styleUrls: ['./manageqcm.panel.scss']
})
export class ManageqcmPanel implements OnInit {

  searchtitle: FormControl;
  sortby: FormControl;
  filterby: string = "";
  filterbyButtonStatus: any = {
    "all" : true,
    "done" : false,
    "todo": false
  }
  cards: Object | any; 
  selectedCardForDelete: Object | any;
  

  constructor(private route: ActivatedRoute, private dialog: MatDialog) { 
    this.searchtitle = new FormControl('');
    this.sortby = new FormControl('');
  }

  ngOnInit(): void {
    this.cards = this.route.snapshot.data.qcmList;
    console.log(this.cards);
  }


  onFilterby(choice: string){
    Object.entries(this.filterbyButtonStatus).forEach(([key, val]) => {
      //alert(key + " " + val)
      if(val===true){this.filterbyButtonStatus[key]=false}
    })
    this.filterbyButtonStatus[choice] = !this.filterbyButtonStatus[choice];
    this.filterby = choice;
    
  }

  openPopupDeleteQcm(templateRef: TemplateRef<any>, card: any){
    this.dialog.open(templateRef, {
      minWidth: '50vw'
    });
    this.selectedCardForDelete = card;
  }
}
