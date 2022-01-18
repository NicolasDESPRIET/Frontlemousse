import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import {data} from "../../../../assets/fakedata";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-qcmcard',
  templateUrl: './qcmcard.component.html',
  styleUrls: ['./qcmcard.component.scss']
})
export class QcmcardComponent implements OnInit {

  @Input() searchtitle: string = "";
  @Input() filterby: string = "";
  @Input() sortby: string = "";

  cards = data.qcms;

  filteredData = ""; 

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openPopupSeeAllResults(templateRef: TemplateRef<any>){
    this.dialog.open(templateRef);
  }

}
