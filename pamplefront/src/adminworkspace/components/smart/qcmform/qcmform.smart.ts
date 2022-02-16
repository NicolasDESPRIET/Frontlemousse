import { Component, ElementRef, Input, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { questionList } from 'assets/fakedata';
import { QcmModel } from 'src/models/qcm.model';
import { Question } from 'src/shared/interfaces/questions';

@Component({
  selector: 'app-qcmform',
  templateUrl: './qcmform.smart.html',
  styleUrls: ['./qcmform.smart.scss']
})
export class QcmformSmart implements OnInit {

  @Input() cardId: number = 0;
  @ViewChildren('question') selectedAnswerInputs: QueryList<ElementRef> | any;
  // Object that will be sent to the back
  qcmEditData: any;
  // List of questions retrieved from the back in the resolver
  questionList: Question[] | any;
  // List of questions ID that are currently selected
  qcmQuestionsIds: number[] = [];
  // Question that is about to be deleted from the form
  selectedCardForDelete: Question | any;

  // Ng Switches
  titleEditMode: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    // When editing
    if(this.router.url != "/admin/manage/qcms/new"){
      this.qcmEditData = this.route.snapshot.data.qcmEditData.qcmData[0];
      this.questionList = this.route.snapshot.data.qcmEditData.questionList;
    }else{
      // In the case of a new QCM
      this.qcmEditData = new QcmModel(undefined, "", "", "Toto TOTO", []);
      this.questionList = this.qcmEditData.questionList;
      
    }
    console.log(this.qcmEditData);
    console.log(this.questionList);
    if(this.qcmEditData.qcmQuestion.length > 0){
      this.qcmEditData.qcmQuestion.forEach((element: any) => {
        this.qcmQuestionsIds.push(element.id);
      });
    }else{
      this.qcmQuestionsIds = [];
    }
    
    console.log(this.qcmQuestionsIds);
  }

  editTitle(){
    this.titleEditMode = true;
  }

  validateTitle(){
    this.titleEditMode = false;
  }

  addQuestion(templateRef: TemplateRef<any>){
    this.dialog.open(templateRef, {
      minWidth: '50vw'
    });
  }

  deleteQuestion(questionId : number){
    
    // delete from Object
    let cardIndex = this.qcmEditData.qcmQuestion.findIndex((item: any) => item.id == questionId);
    this.qcmEditData.qcmQuestion.splice(cardIndex, 1);

    // delete from table of ids
    let idIndex: number = this.qcmQuestionsIds.findIndex((item: any) => item.id == questionId);
    this.qcmQuestionsIds.splice(idIndex, 1);
    console.log(this.qcmEditData);
    console.log(idIndex);
  }

  openDeleteQuestionPopup(templateRef: TemplateRef<any>, question: Question){
    this.dialog.open(templateRef, {
      minWidth: '50vw'
    });
    this.selectedCardForDelete = question;
    console.log(question.id);
  }

  addQuestionToList(questionId: number){
    if(!this.qcmQuestionsIds.includes(questionId)){
      this.qcmQuestionsIds.push(questionId);
    }else{
      let index = this.qcmQuestionsIds.indexOf(questionId);
      this.qcmQuestionsIds.splice(index, 1);
    }
    console.log(this.qcmQuestionsIds);
  }

  // Tests for another way of creating questions and QCM
  validateQuestionChoice(){

    // Adding the items
    console.log(this.qcmEditData);
    this.qcmQuestionsIds.forEach((item: any) => {
      let newQuestion = questionList.find((element: any) => element.id === item);
      if(!this.qcmEditData.qcmQuestion.includes(newQuestion)){
        this.qcmEditData.qcmQuestion.push(newQuestion);
      }
      
    })
    console.log(this.qcmEditData.qcmQuestion);
    // removing items

    this.qcmEditData.qcmQuestion.forEach((item: any)=>{
      let currentId = item.id;
      console.log(currentId);
      if(!this.qcmQuestionsIds.includes(currentId)){
        console.log("in check current id not here so go away");
        let index = this.qcmEditData.qcmQuestion.indexOf(currentId);
        this.qcmEditData.qcmQuestion.splice(index, 1);
        console.log(this.qcmEditData.qcmQuestion);
      }
    })
    console.log(this.qcmEditData);
    this.dialog.closeAll();

    // CRUD WILL BE DONE HERE
    
  }

  submitQcm(){
    let data = this.qcmEditData;
    console.log(data);
  }



}
