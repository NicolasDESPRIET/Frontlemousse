import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { questionList } from 'assets/fakedata';
import { QuestionModel } from 'src/models/question.model';


@Injectable({
  providedIn: 'root'
})
export class QuestionlistResolver implements Resolve<QuestionModel[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): QuestionModel[] {
    return questionList;
  }
}
