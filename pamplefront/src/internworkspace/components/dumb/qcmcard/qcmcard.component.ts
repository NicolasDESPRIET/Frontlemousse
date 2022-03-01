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
  rawData: any = {};

  constructor(private dialog: MatDialog, private route: ActivatedRoute) {
    
    

  }

  ngOnInit(): void {
    console.log(this.route.snapshot.data.qcmList);

    this.rawData.parcours = this.route.snapshot.data.qcmList[0];
    this.rawData.qcms = this.route.snapshot.data.qcmList[1];

    console.log(this.rawData);
    // Structurate data
    this.cards = [];

    // Retrieve done QCMs
    let idDone: number[] = [];
    this.rawData.parcours.map((element:any) => {
      idDone.push(element.qcm.id);
    })

    // Fill cards with done qcms
    this.rawData.qcms.map((element:any) => {
      if(idDone.includes(element.id)){
        this.cards.push({
          id: element.id,
          name: element.name,
          results: [],
          done: true
        })
      }
    });

    //Fill done cards with results 
    this.rawData.parcours.map((element:any)=>{
      let id = element.qcm.id;
      let cardIndex = this.cards.findIndex((item:any) => item.id === id);
      this.cards[cardIndex].results.push(
        {
          mark: element.note,
          date: element.date,
          duration: element.time
        }
      )
    })

    // Populate cards with QCM that have not been done
    this.rawData.qcms.map((element:any) => {
      if(!this.cards.some((item:any) => item.id === element.id)){
        this.cards.push({
          id: element.id,
          name: element.name,
          results: [],
          done: false
        })
      }
    })
 
    console.log(this.cards);
/**
     * {
            id:2,
            title: "Quelle est la différence entre une poule en Patagonie",
            results: [
                {
                    mark: 18,
                    date: "01/03/2022",
                    duration: 1203,
                }
            ],
            done: true
        },
     */
    /**
     * [
  {
    "id": 1,
    "time": 1235.256,
    "date": "2022-01-24T00:00:00.000Z",
    "note": "20/20",
    "nbSucces": 1,
    "nbFailed": 0,
    "nbBlank": [
      {
        "id": 1,
        "enonce": "soit l'appel suivant : public static void main(String[]args){ afficher(1); afficher(1,2); } Choisir la (les) bonne(s) signature(s) de la mÃ©thode afficher :",
        "responsesList": null
      }
    ],
    "qcm": {
      "id": 1212,
      "name": "JAVA",
      "description": "",
      "author": "admin1"
    },
    "stagiaire": {
      "id": 2,
      "name": "Vincent Rambaud",
      "password": "azerty123123!",
      "type": {
        "id": 2,
        "name": "stagiaire"
      },
      "societe": "sogeti"
    }
  }
]
     */

    /**
     * export interface Parcours {
    id: number;
    time: number;
    date: string;
    note: string;
    nbSucces: number;
    nbFailed: number;
    nbBlank: Question[];
    qcm: Qcm;
    stagiaire: User;
}
     */


    // Add undone QCMs




    

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
