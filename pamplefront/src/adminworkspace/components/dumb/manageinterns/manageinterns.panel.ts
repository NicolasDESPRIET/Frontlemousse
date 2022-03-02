import { Component, OnInit, TemplateRef, Type } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserTypeModel } from 'src/models/type.model';
import { UserModel } from 'src/models/user.model';
import { UsersService } from 'src/shared/http/users.service';
import { User, UserFromClientDto } from 'src/shared/interfaces/users';

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
  //check if invalid add
  invalidAdd: boolean = false;

  // Intern Popup form
  manageInternForm = this.formBuilder.group({
    name: "",
    familyName: "",
    societe: "",
    password: ""
  });
  currentIdModification: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private dialog: MatDialog, 
    private formBuilder: FormBuilder,
    private userService: UsersService
    ) 
    { 
    this.searchtitle = new FormControl('');
    this.sortby = new FormControl('');
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.data)
    this.internList = this.route.snapshot.data.userList[0]
      .filter((item: User) => item.type.name == "stagiaire");
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

  onDeleteIntern(selectedCardForDelete: any){
    this.userService.deleteUser(selectedCardForDelete.id).toPromise()
      .then((res)=>{console.log(res)}).catch(err=>console.log(err));
    window.location.reload();
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
    this.currentIdModification = intern.id;
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
    if(this.isInternNew){
      console.log("NEW INTERN")
      const name = this.manageInternForm.controls.name.value + " " + this.manageInternForm.controls.familyName.value;
      const dataUser: UserFromClientDto = {
        name: name,
        password: this.manageInternForm.controls.password.value,
        typeId: 2,
        societe: this.manageInternForm.controls.societe.value 
      }
      console.log(dataUser);
      this.userService.getOneUserBByName(name).toPromise()
        .catch((error) => console.log(error))
        .then(result => {
          if(result == undefined || result == null){
            console.log("It is really a new user");
            this.userService.createUser(dataUser).toPromise().then(result => {console.log(result)});
            this.dialog.closeAll();
            window.location.reload();
          }else{
            console.log("already exist")
            this.invalidAdd = true;
          }
        })
      
    }

    if(!this.isInternNew){
      console.log("OLD INTERN");
      const name = this.manageInternForm.controls.name.value + " " + this.manageInternForm.controls.familyName.value;
      const dataUser: UserFromClientDto = {
        name: name,
        password: this.manageInternForm.controls.password.value,
        typeId: 2,
        societe: this.manageInternForm.controls.societe.value 
      }
      console.log(this.currentIdModification);
      this.userService.getOneUserById(this.currentIdModification).toPromise()
        .catch(err=>console.log(err))
        .then((result:any)=> {
          console.log(result.name + " " +  name);
          // check name modification
          if(result.name==name){
            console.log(result.name + " " +  name);
            console.log("NO modification has been done on name");
            // we need to do this trick to bypass error when no modification name
            const temp: UserFromClientDto = {
              name: "temp",
              password: this.manageInternForm.controls.password.value,
              typeId: 2,
              societe: this.manageInternForm.controls.societe.value 
            }
            this.userService.updateUser(temp, this.currentIdModification).toPromise()
              .then((result:any)=>{
                console.log("update\n"+JSON.stringify(result))
              })
              .then((res)=>{
                this.userService.updateUser(dataUser, this.currentIdModification).toPromise()
                  .then((result:any)=>{
                    console.log("update\n"+JSON.stringify(result))
                    this.dialog.closeAll();
                    window.location.reload();
                  });
                }
              );
          }else{
            // check if new name does not already exist
            this.userService.getOneUserBByName(name).toPromise()
              .catch(err=>console.log(err))
              .then((result:any) => {
                console.log(result)
                if(result!=undefined && result!=null){
                  this.invalidAdd = true;
                }
                else{
                  this.userService.updateUser(dataUser, this.currentIdModification);
                }
            })
            this.userService.updateUser(dataUser, this.currentIdModification).toPromise().
            then((result:any)=>{
              console.log("update\n"+JSON.stringify(result))
              this.dialog.closeAll();
              window.location.reload();
            });
          }
          
        })

      
    }
    this.invalidAdd = false;
    
  }
}
