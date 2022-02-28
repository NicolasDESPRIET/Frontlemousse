import { Component, OnInit, TemplateRef } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/shared/interfaces/questions';

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
    enonce: [""],
    responses: this.formBuilder.array([])
  });
  

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private dialog: MatDialog, ) {
    this.searchtitle = new FormControl('');
    this.sortby = new FormControl('');
  }

  ngOnInit(): void {
    this.questionList = this.route.snapshot.data.questionList;
  }

  get responses(): FormArray {
    return this.manageQuestionsForm.controls["responses"] as FormArray;
  }

  newResponse(): FormGroup {
    return this.formBuilder.group({
      possibleResponse: "",
      value: 0
    })
  }

  addResponse(possibleResponse: string, value: number){
    const responseForm = this.formBuilder.group({
      possibleResponse: [possibleResponse, Validators.required],
      value: [value, Validators.required]
    });
    this.responses.push(responseForm);
  }

  removeResponse(i: number){
    this.responses.removeAt(i);
  }

  onQuestionCreation(templateRef: TemplateRef<any>){
    this.isQuestionNew = true;
    this.manageQuestionsForm.patchValue({
      enonce: "",
      responses: [["", 0]]
    })
    this.dialog.open(templateRef, {
      minWidth: '50vw'
    });
  }

  onQuestionModification(question: Question, templateRef: TemplateRef<any>){
    this.isQuestionNew = false;
    let arrayResponse = [];
    for(const [key, value] of Object.entries(question.responses)){
      this.addResponse(key, value);
      arrayResponse.push({possibleResponse: key, value: value});
    }
    console.log("Array esponse");
    console.log(arrayResponse);
    console.log(this.manageQuestionsForm.controls.enonce.value);
    console.log(this.manageQuestionsForm.controls.responses.value);
    this.newResponse();
    console.log(this.newResponse());
    
    this.manageQuestionsForm.patchValue(
      {
        enonce: question.enonce,
      }
    )
    
    console.log(this.manageQuestionsForm.controls.enonce.value);
    console.log(this.manageQuestionsForm.controls.responses.value);
    this.dialog.open(templateRef, {
      minWidth: '50vw'
    });
    
  }

  
  openPopupDeleteQuestion(question: Question, templateRef: TemplateRef<any>){
    this.selectedCard = question;
    this.dialog.open(templateRef, {
      minWidth: '50vw'
    });
  }  

  onSubmitQuestionForm(){
    console.log(this.manageQuestionsForm.value);
  }

}
