import { Component, Inject, Input, OnInit, TemplateRef } from '@angular/core';
import { data } from "../../../../../assets/fakedata";
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qcmcard',
  templateUrl: './qcmcard.component.html',
  styleUrls: ['./qcmcard.component.scss']
})
export class QcmcardComponent implements OnInit {

  @Input() searchtitle: string = "";
  @Input() filterby: string = "";
  @Input() sortby: string = "";

  selectedCardForResults: any | undefined;
  selectedCardForDo: any | undefined;

  cards: any;

  filteredData = "";

  constructor(private dialog: MatDialog, route: ActivatedRoute) {
    this.cards = route.snapshot.data.qcmList;
    console.log(this.cards);
  }

  ngOnInit(): void {
  }

  openPopupSeeAllResults(templateRef: TemplateRef<any>, card: any) {
    this.dialog.open(templateRef, {
      minWidth: '50vw'
    });
    this.selectedCardForResults = card;
  }

  openPopupDoQcm(templateRef: TemplateRef<any>, card: any) {
    this.dialog.open(templateRef, {
      minWidth: '50vw'
    });
    this.selectedCardForDo = card;
  }

}
