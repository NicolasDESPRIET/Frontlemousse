import {EventEmitter, Component, ElementRef, Input, OnInit, Output, QueryList, TemplateRef, ViewChildren, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { KeyValue } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ICanComponentDeactivate } from 'src/shared/guards/quit-qcm-before-finish.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-doqcm',
  templateUrl: './doqcm.component.html',
  styleUrls: ['./doqcm.component.scss']
})
export class DoqcmComponent implements OnInit {

  /**
   * Variables
   */
  @ViewChildren('answer') answerInputs: QueryList<ElementRef> | any;
  
  // Route id
  routeId: number | any;
  // Used to fetch and store the qcm data corresponding to route
  qcmData: any;
  // Stores a table with all the questions
  questionList: any;
  // Counter used to know which question is being processed
  currentQuestion: number = 1;
  // Used to calculate the mark only. Will be removed on next version and replaced by scoreObject
  scoreArray: number[] = [];
  // Used to store question's results : {id : -1 | 0 | 1 }
  scoreObject: Object | any = {};
  // Number of questions used for both progress bar and the "question x/4" in the UI
  numberOfQuestions: number = 0;
  // Used to calculate progress bar independantly of current question number
  progressBarAdvancement: number = 0;
  // Used to know whether to display results or not
  isQcmFinished: Boolean = false;
  // Results 
  resultsObject: Object | any = {};
  // Time
  startTimestamp:  number = 0;
  endTimestamp: number = 0;
  // Subscriber to get id param from url
  private subscriber: any;



  /**
   * Functions
   */
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
  

  /**
   * Class Methods
   */
  constructor(private route: ActivatedRoute, private dialog: MatDialog, private progressBar: MatProgressBarModule) { }

  ngOnInit(): void {
    // Select the right qcm 
    console.log(this.route.snapshot.data);
    this.subscriber = this.route.params.subscribe(params => {
      this.routeId = +params['id'];
    })
    this.qcmData = this.route.snapshot.data.qcmList.find((element:any) => element.id == this.routeId);
    // Init the question list with a shuffle 
    this.questionList = this.qcmData.qcmQuestion.sort(this.shuffleArray);
    console.log("RESPONSES");
    console.log(this.questionList[this.currentQuestion-1].responses);
    // initialize the number of questions variable used for the progress bar
    this.numberOfQuestions =  this.questionList.length;
    // Initialize the score array with as many '0' as there are questions to answer 
    for(let i = 0 ; i < this.numberOfQuestions ; i++){
      this.scoreArray.push(0);
    }
    this.startTimestamp = Date.now();
    console.log(this.scoreArray);
    console.log("RESULTS OBJECT ON INIT");
    console.log(this.resultsObject);
  }

  ngOnDestroy(){
    this.subscriber.unsubscribe();
  }

  // This method is called when the use validates the last question
  calculateFinalMark(){
    // In this method, we calculate the results and store them 
    // in an object which will be sent to the back-end.

    // First we update the progress bar for the UI
    this.progressBarAdvancement++;

    // Calculate mark
    let mark = this.scoreArray.reduce((prev, current) => prev + current);
    if(mark < 0){mark = 0};
    // Convert to "/20" mark
    mark = Math.round(mark/this.numberOfQuestions*20*10)/10;
    this.resultsObject["mark"] = mark;

    // Calculate the number of blank answers
    console.log("RESULTS OBJECT");
    console.log(this.resultsObject);
    let blankAnswersNumber = Object
      .entries(this.scoreObject)
      .filter(([key, value]) => value === 0)
      .length;
    this.resultsObject["blank"] = blankAnswersNumber;


    // Calculate the number of right answers
    let rightAnswersNumber = Object
      .entries(this.scoreObject)
      .filter(([key, value]) => value === 1)
      .length;
    this.resultsObject["right"] = rightAnswersNumber;

    // Calculate the number of wrong answers
    let wrongAnswersNumber = Object
      .entries(this.scoreObject)
      .filter(([key, value]) => value === -1)
      .length;
    this.resultsObject["wrong"] = wrongAnswersNumber;

    // Calculate duration
    this.endTimestamp = Date.now();
    this.resultsObject["duration"] = Math.trunc(this.endTimestamp/1000) - Math.trunc(this.startTimestamp/1000);
    

    // Send info to parent component when test is finished
    this.isQcmFinished=true;
    console.log(this.resultsObject);
    
  }

  // Called by the "Yes" button of the "Validate" popup 
  // Called by the calculateResult() method
  // Used to check whether there is a next question or not
  goToNextQuestion(){
    console.log("RESULTS OBJECT BEFORE NEXT QUESTION");
    console.log(this.resultsObject);
    console.log(this.scoreArray);
    // When there is another question to answer
    if(this.currentQuestion < this.numberOfQuestions)
    {
      this.currentQuestion++;
      this.progressBarAdvancement++;
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
      // The score object is updated with the "malus" result when the user has failed the question
      this.scoreObject[this.questionList[this.currentQuestion-1].id] = -1;
      // Go to next question after results calculation
      this.goToNextQuestion();
    }
    else
    {
      // The user has succeeded so the score array is updated with the "bonus" result
      this.scoreArray[this.currentQuestion-1] = 1;
      // The user has succeeded so the score object is updated with the "bonus" result
      this.scoreObject[this.questionList[this.currentQuestion-1].id] = 1;
      // Go to next question
      this.goToNextQuestion();
    }

  }

  // Method called when the user click on validate button
  validateQuestion(currentQuestion: any, templateRef: TemplateRef<any>){

    // Answers (solution)
    let realAnswers = this.questionList[currentQuestion-1].responses;
    // User's answer
    let answersObject: Object | any = {};
    // Variable to check whether nothing has been answered or not
    let isBlank: Boolean = true;

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

    // Check if an answer has been submitted
    Object.values(answersObject).forEach(value => {if (value!==0){isBlank=false}});

    // If no answer has been submitted opens the warning popup "you are about to submit a blank answer"
    if(isBlank){
      this.dialog.open(templateRef, {
        minWidth: '50vw'
      });
    }else{
      this.calculateResult(answersObject, realAnswers, this.numberOfQuestions);
    }    
  }

  // Used to access the next question from the popup when user sends a blank answer. 
  onClickNextQuestion(){
    this.scoreObject[this.questionList[this.currentQuestion-1].id] = 0;
    this.goToNextQuestion();
  }


  // Prevent user from quitting the QCM
  canDeactivate(): boolean {
    if(this.isQcmFinished){
      return true;
    }
    else
    {
      return confirm("Quitter ? Tout votre parcours sera perdu.");
    }
  }

}
