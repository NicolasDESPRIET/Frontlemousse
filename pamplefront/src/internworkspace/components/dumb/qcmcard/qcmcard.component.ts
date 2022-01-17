import { Component, OnInit } from '@angular/core';
import {data} from "../../../../assets/fakedata";

@Component({
  selector: 'app-qcmcard',
  templateUrl: './qcmcard.component.html',
  styleUrls: ['./qcmcard.component.scss']
})
export class QcmcardComponent implements OnInit {

  cards = data.qcms;

  filteredData = ""; 

  constructor() { }

  ngOnInit(): void {
  }

}
