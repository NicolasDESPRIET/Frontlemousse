import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doqcm',
  templateUrl: './doqcm.component.html',
  styleUrls: ['./doqcm.component.scss']
})
export class DoqcmComponent implements OnInit {

  @Input() qcmList: Object | any;
  @Input() routeId: number | any;

  currentQuestion: number = 1;
  scoreArray: number[] = [];

  //currentQuestionAnswers: Object | any = this.qcmList[this.routeId].qcmQuestion[this.currentQuestion].responses

  constructor() { }

  ngOnInit(): void {
    let questionNumber = this.qcmList[this.routeId].qcmQuestion.length
    console.log(questionNumber);
    for(let i = 0 ; i < questionNumber ; i++){
      this.scoreArray.push(0);
    }
    console.log(this.scoreArray);
  }

  validateQuestion(currentQuestion: any){
    console.log(currentQuestion);
  }

  // Used to access the previous question
  onClickPreviousQuestion(){
    
    if(this.currentQuestion > 1){
      this.currentQuestion--;
      console.log(`
      Current Question : ${this.currentQuestion}
      `)
    }else{
      console.log("This is the first question !");
      this.currentQuestion = 4;
    }
  }

  // Used to access the next question. When it arrives at the last question it goes
  // back to the first question.
  onClickNextQuestion(){
    let questionNumber = this.qcmList[this.routeId].qcmQuestion.length;
    if(this.currentQuestion < questionNumber){
      this.currentQuestion++
      console.log(`
      Question number : ${questionNumber}
      Current Question : ${this.currentQuestion}
      `)
      
    }else{
      this.currentQuestion = 1;
    }
  }

}
