import { Component, ElementRef, Input, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-doqcm',
  templateUrl: './doqcm.component.html',
  styleUrls: ['./doqcm.component.scss']
})
export class DoqcmComponent implements OnInit {

  @Input() qcmList: Object | any;
  @Input() routeId: number | any;
  @ViewChildren('answer') answerInputs: QueryList<ElementRef> | any;

  questionList: any;
  currentQuestion: number = 1;
  // Used to calculate the mark only. Will be removed on next version and replaced by scoreObject
  scoreArray: number[] = [];
  // Used to store question's results : {id : -1 | 0 | 1 }
  scoreObject: Object | any = {};
  // This variable is just used for the progress bar for now but
  // It will be useful to remove the questionNumber from the methods and
  // use this one instead
  generalQuestionNumber: number = 0;

  shuffleArray = (a: KeyValue<string, number>, b: KeyValue<string, number>): number => 
  {
    let randomNumber = Math.floor(Math.random()*10);
    console.log("Random number :");
    console.log(randomNumber);
    if(randomNumber < 5){
      return 1
    }else{
      return -1
    }
  }
  
  constructor(private dialog: MatDialog, private progressBar: MatProgressBarModule) { }

  ngOnInit(): void {

    this.questionList = this.qcmList[this.routeId-1].qcmQuestion.sort(this.shuffleArray);
    // initialize the general question number variable used for the progress bar
    this.generalQuestionNumber =  this.qcmList[this.routeId-1].qcmQuestion.length
    // Initialize the score array with as many '0' as there are questions to answer 
    let questionNumber = this.qcmList[this.routeId-1].qcmQuestion.length
    console.log(questionNumber);
    for(let i = 0 ; i < questionNumber ; i++){
      this.scoreArray.push(0);
    }
    console.log(this.scoreArray);
  }

  // This method is called when the use validates the last question
  calculateFinalMark(){
    console.log(this.scoreArray);

    // Calculate mark
    let mark = this.scoreArray.reduce((prev, current) => prev + current);
    if(mark < 0){mark = 0};

    // Store info about questions


    // Convert to "/20" mark
    let questionNumber = this.qcmList[this.routeId].qcmQuestion.length;
    mark = Math.round(mark/questionNumber*20*10)/10;

    console.log("NOTE");
    console.log(mark);

    // Print results for debugging purposes
    Object.entries(this.scoreObject).forEach(([key, value]) => {
      for(let i = 0 ; i < questionNumber ; i++){
        //if(this.questionList[i].id = key)
      }
    })
  }

  // Called by the "Yes" button of the "Validate" popup 
  // Called by the calculateResult() method
  // Used to check whether there is a next question or not
  goToNextQuestion(){
    let questionNumber = this.qcmList[this.routeId-1].qcmQuestion.length;
    console.log(this.scoreArray);
    // When there is another question to answer
    if(this.currentQuestion < questionNumber)
    {
      this.currentQuestion++;
    }
    // When the user has answered all the questions
    else
    {
      this.calculateFinalMark();
    }
  }

  // Method called from within validateQuestion() when an answer has been submitted
  calculateResult(answersObject: any, realAnswers: any, questionNumber: number){
      // Evaluate the answers and updates the score array consequently  
     // Compares the real answers to the user's answers. 
     if (Object.entries(answersObject).some(
      // We get answersObject in the form of an array of [[key, value], [key, value]]
      // Then we check if the real answer of a given key (item[0] is the same as the user's (item[1]))
      (item) => realAnswers[item[0]] !== item[1]
      ))
    {
      // The score array is updated with the "malus" result when the user has failed the question
      this.scoreArray[this.currentQuestion-1]=-1;
      this.scoreObject[this.questionList[this.currentQuestion-1].id] = -1;
      // Go to next question
      this.goToNextQuestion();
    }
    else
    {
      // The user has succeeded
      this.scoreArray[this.currentQuestion-1]=1;
      this.scoreObject[this.questionList[this.currentQuestion-1].id] = 1;
      // Go to next question
      this.goToNextQuestion();
    }

    
    console.log("Results :")
    console.log("Your answers")
    console.log(answersObject);
    console.log("Real answers");
    console.log(realAnswers);
    console.log(this.scoreArray);
    console.log("SCORE OBJECT");
    console.log(this.scoreObject);
  }

  // Method called when the user click on validate button
  validateQuestion(currentQuestion: any, templateRef: TemplateRef<any>){

    // Useful variables
    // Answers
    let realAnswers = this.qcmList[this.routeId-1].qcmQuestion[currentQuestion-1].responses;
    // User's answer
    let answersObject: Object | any = {};
    // Variable to check whether nothing has been answered or not
    let isBlank: Boolean = true;
    // number of questions
    let questionNumber = this.qcmList[this.routeId-1].qcmQuestion.length;

    // Populate user's answers object
    this.answerInputs.map(
      (item : any) => {
        if(item.nativeElement.checked===true){
          answersObject[item.nativeElement.id]=1
        }else{
          answersObject[item.nativeElement.id]=0
        }
      }
    );

    // If nothing has been answered warn the user. A popup opens
    // and if the user chooses to move to the next question, the  
    Object.values(answersObject).forEach(value => {if (value!==0){isBlank=false}});
    console.log(isBlank);
    if(isBlank){
      this.dialog.open(templateRef, {
        minWidth: '50vw'
      });
    }else{
      this.calculateResult(answersObject, realAnswers, questionNumber);
    }    
  }

  // Used to access the next question from the popup when user sends a blank answer. 
  onClickNextQuestion(){
    this.scoreObject[this.questionList[this.currentQuestion-1].id] = 0;
    this.goToNextQuestion();
  }

}
