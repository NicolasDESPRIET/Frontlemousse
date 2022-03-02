import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { intern, userList } from 'assets/fakedata';
import { Observable, of } from 'rxjs';
import { UsersService } from '../http/users.service';
import { User } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class InternlistResolver implements Resolve<User[]> {
  constructor(private userService: UsersService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const interns = new Promise((resolve, reject)=> {
      this.userService.getAllUser().subscribe((res)=>{
        resolve(res);
      }, (err)=>{console.log('err', err)});
    }); 
    return Promise.all([interns]);

  }
}
