import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
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
  selectedCardForDelete: Object | any;

  // Variable for new question popup
  isQuestionNew: boolean = true;

    // Intern Popup form
    manageQuestionsForm = this.formBuilder.group({
      enonce: "",
      answers: {}
    });

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private dialog: MatDialog, ) {
    this.searchtitle = new FormControl('');
    this.sortby = new FormControl('');
   }

  ngOnInit(): void {
    this.questionList = this.route.snapshot.data.questionList;
  }

  onQuestionCreation(templateRef: TemplateRef<any>){

  }

  onQuestionModification(question: Question, templateRef: TemplateRef<any>){

  }

  
  openPopupDeleteQuestion(question: Question, templateRef: TemplateRef<any>){

  }  

  onSubmitQuestionForm(){

  }

}
