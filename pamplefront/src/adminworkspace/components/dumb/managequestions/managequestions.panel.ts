import { Component, OnInit, TemplateRef } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Question, QuestionFromClientDto } from 'src/shared/interfaces/questions';

@Component({
  selector: 'app-managequestions',
  templateUrl: './managequestions.panel.html',
  styleUrls: ['./managequestions.panel.scss']
})
export class ManagequestionsPanel implements OnInit {

  searchtitle: FormControl;
  sortby: FormControl;
  filterby: string = "";
  questionList: Question[] = [];
  selectedCard: Object | any;

  // Variable for new question popup
  isQuestionNew: boolean = true;

  // Intern Popup form

  manageQuestionsForm = this.formBuilder.group({
    enonce: "",
    response_1: "",
    answer_1: 0,
    response_2: "",
    answer_2: 0,
    response_3: "",
    answer_3: 0,
    response_4: "",
    answer_4: 0,
    response_5: "",
    answer_5: 0
  });


  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private dialog: MatDialog,) {
    this.searchtitle = new FormControl('');
    this.sortby = new FormControl('');
  }

  ngOnInit(): void {
    this.questionList = this.route.snapshot.data.questionList;
  }

  onQuestionCreation(templateRef: TemplateRef<any>) {
    this.isQuestionNew = true;
    this.manageQuestionsForm.setValue({
      enonce: "",
      response_1: "",
      answer_1: 0,
      response_2: "",
      answer_2: 0,
      response_3: "",
      answer_3: 0,
      response_4: "",
      answer_4: 0,
      response_5: "",
      answer_5: 0
    })
    this.dialog.open(templateRef, {
      minWidth: '50vw'
    });
  }



  onQuestionModification(question: Question, templateRef: TemplateRef<any>) {
    this.isQuestionNew = false;
    console.log(this.manageQuestionsForm.controls.enonce.value);
    console.log(this.manageQuestionsForm.controls.responses.value);
    this.dialog.open(templateRef, {
      minWidth: '50vw'
    });

  }


  openPopupDeleteQuestion(question: Question, templateRef: TemplateRef<any>) {
    this.selectedCard = question;
    this.dialog.open(templateRef, {
      minWidth: '50vw'
    });
  }

  onSubmitQuestionForm() {
    console.log(this.manageQuestionsForm.value);
    // Formatting data
    let question: QuestionFromClientDto = {
      enonce: this.manageQuestionsForm.controls.enonce.value,
      responses: {}
    }
    //adding responses
    // get filled field
    const responsesArray=[
      [this.manageQuestionsForm.controls.response_1.value, this.manageQuestionsForm.controls.answer_1.value],
      [this.manageQuestionsForm.controls.response_2.value, this.manageQuestionsForm.controls.answer_2.value],
      [this.manageQuestionsForm.controls.response_3.value, this.manageQuestionsForm.controls.answer_3.value],
      [this.manageQuestionsForm.controls.response_4.value, this.manageQuestionsForm.controls.answer_4.value],
      [this.manageQuestionsForm.controls.response_5.value, this.manageQuestionsForm.controls.answer_5.value]
    ]
    const filledResponses: any = responsesArray.filter((element)=>element.length>0);
    filledResponses.map((item:any)=>{
        let questionText: string = item[0];
        let value: number = item[1];
        question.responses[questionText] = question.responses.item[1]
      })
    console.log(filledResponses);

    /**
     * {
    "enonce" : "Question 1",
    "responses" : {
        "A" : 1,
        "B" : 0,
        "C" : 1
    }
}
     */
  }

}
