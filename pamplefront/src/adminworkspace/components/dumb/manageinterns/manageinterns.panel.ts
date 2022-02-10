import { Component, OnInit, TemplateRef, Type } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { TypeModel } from 'src/models/type.model';
import { UserModel } from 'src/models/user.model';
import { UsersService } from 'src/shared/http/users.service';
import { User } from 'src/shared/interfaces/users';

@Component({
  selector: 'app-manageinterns',
  templateUrl: './manageinterns.panel.html',
  styleUrls: ['./manageinterns.panel.scss']
})
export class ManageinternsPanel implements OnInit {

  internList: User[] = [];
  searchtitle: FormControl;
  sortby: FormControl;
  filterby: string = "";
  filterbyButtonStatus: any = {
    "all" : true,
    "done" : false,
    "todo": false
  }
  selectedCardForDelete: Object | any;
  regexName: RegExp = /[A-Za-z]+/i;
  regexFamilyname: RegExp = /\s[A-Za-z]+/i

  // Variable for new intern popup
  isInternNew: boolean = true;

  // Intern Popup form
  manageInternForm = this.formBuilder.group({
    name: "",
    familyName: "",
    societe: "",
    password: ""
  });

  /**
   * export interface User {
    id: number;
    name: string;
    password: string;
    type: Type;
    societe: string;
}
   */

  constructor(
    private route: ActivatedRoute, 
    private dialog: MatDialog, 
    private formBuilder: FormBuilder,
    private userAPIService: UsersService
    ) 
    { 
    this.searchtitle = new FormControl('');
    this.sortby = new FormControl('');
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.data)
    this.internList = this.route.snapshot.data.userList
      .filter((item: User) => item.type.name == "intern");
    console.log(this.internList);
  }

  onFilterby(choice: string){
    Object.entries(this.filterbyButtonStatus).forEach(([key, val]) => {
      //alert(key + " " + val)
      if(val===true){this.filterbyButtonStatus[key]=false}
    })
    this.filterbyButtonStatus[choice] = !this.filterbyButtonStatus[choice];
    this.filterby = choice;
  }

  openPopupDeleteIntern(templateRef: TemplateRef<any>, card: any){
    this.dialog.open(templateRef, {
      minWidth: '50vw'
    });
    this.selectedCardForDelete = card;
  }

  onInternCreation(templateRef: TemplateRef<any>){
    this.isInternNew = true;
    this.manageInternForm.setValue({
      name: "",
      familyName: "",
      societe: "",
      password: ""
    })
    this.dialog.open(templateRef, {
      minWidth: '50vw'
    });
  }

  onInternModification(intern: User, templateRef: TemplateRef<any>){
    this.isInternNew = false;
    this.manageInternForm.setValue({
      name: intern.name.match(this.regexName),
      familyName: intern.name.match(this.regexFamilyname),
      societe: intern.societe,
      password: intern.password
    })
    this.dialog.open(templateRef, {
      minWidth: '50vw'
    });
  }

  onSubmitInternForm(){
    alert(this.manageInternForm.controls.name.value 
      + "\n"
      + this.manageInternForm.controls.familyName.value 
      + "\n"
      + this.manageInternForm.controls.password.value 
      + "\n"
      + this.manageInternForm.controls.societe.value 
      + "\n");
    let username = this.manageInternForm.controls.name.value + " " + this.manageInternForm.controls.familyName.value;
    let type = new TypeModel(0, "intern");
    let dataUser = new UserModel(
      0,
      type,
      username,
      this.manageInternForm.controls.password.value,
      this.manageInternForm.controls.societe.value 
    );
    console.log(dataUser);
    //const allUsers = await this.userAPIService.getAllUser().subscribe((res) => {})
    this.dialog.closeAll();
  }
}
