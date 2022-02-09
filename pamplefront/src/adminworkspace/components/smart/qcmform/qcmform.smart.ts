import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { QcmResponseModel } from 'src/models/qcmresponse';
import { Question, QcmResponse } from 'src/shared/interfaces/questions';

@Component({
  selector: 'app-qcmform',
  templateUrl: './qcmform.smart.html',
  styleUrls: ['./qcmform.smart.scss']
})
export class QcmformSmart implements OnInit {

  @Input() cardId: number = 0;
  qcmEditData: any;
  selectedCardForDelete: Question | any;

  // Ng Switches
  titleEditMode: boolean = false;

  constructor(private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.qcmEditData = this.route.snapshot.data.qcmEditData[0]
    console.log(this.qcmEditData)
  }

  editTitle(){
    this.titleEditMode = true;
  }

  validateTitle(){
    this.titleEditMode = false;
  }

  addQuestion(){
    let newQuestion: Question = {
      id : 1,
      enonce: "Saisissez un énoncé",
      responses: {
        "Saisissez une réponse" : 0
      }
    }
    this.qcmEditData.qcmQuestion.push(newQuestion);
    console.log(this.qcmEditData);
  }

  deleteQuestion(questionId : number){
    let cardIndex = this.qcmEditData.qcmQuestion.findIndex((item: any) => item.id == questionId);
    this.qcmEditData.qcmQuestion.splice(cardIndex, 1);
    console.log(this.qcmEditData);
  }

  addResponse(questionId: number){
    let cardIndex = this.qcmEditData.qcmQuestion.findIndex((item: any) => item.id == questionId);
    let responseObject = this.qcmEditData.qcmQuestion[cardIndex].responses;
    console.log(responseObject);
    let responseObjectLength = Object.keys(responseObject).length;
    console.log(responseObjectLength);
    let newResponseName = "Nouvelle réponse n°" + responseObjectLength; 
    this.qcmEditData.qcmQuestion[cardIndex].responses[newResponseName]= 1 ;
  }

  deleteResponse(questionId: number, responseName: any){
    let cardIndex = this.qcmEditData.qcmQuestion.findIndex((item: any) => item.id == questionId);
    delete this.qcmEditData.qcmQuestion[cardIndex].responses[responseName];
  }

  openDeleteQuestionPopup(templateRef: TemplateRef<any>, question: Question){
    this.dialog.open(templateRef, {
      minWidth: '50vw'
    });
    this.selectedCardForDelete = question;
  }

}
