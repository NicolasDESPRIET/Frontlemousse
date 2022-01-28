import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { userList } from 'assets/fakedata';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class InternlistResolver implements Resolve<User[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User[] {
    return userList;
  }
}
