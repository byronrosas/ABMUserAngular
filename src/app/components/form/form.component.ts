import { User } from 'src/app/models';
import { UserService } from './../../services/user.service';
import { UserRequest } from './../../models/user-request';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() user_req?:UserRequest;
  public formUserGroup: FormGroup;
  public user: UserRequest;
  public isSave:boolean=false;
  public isUpdate:boolean=false;
  public isErr:boolean=false;
  constructor(private formBuilder: FormBuilder, public _userService:UserService) {
    this.user = new UserRequest();
    if(this.user_req != null)
    {
      this.user = this.user_req;
    }
  }

  ngOnInit() {
    this.buildUserForm();
  }

  private buildUserForm() {
    this.formUserGroup = this.formBuilder.group({
      name: [this.user.name, Validators.required],
      job: [this.user.job, Validators.required],      
    });    
  }

  public onSubmit() {
    const newUser: UserRequest = Object.assign({}, this.formUserGroup.value);
    if(this.user_req != null)
    {
      this.updateUser(newUser);       
    }else{
      this.createUser(newUser);
    }
  }

  createUser(userreq)
  {
    this._userService.add(userreq)
    .subscribe( (res:User)=>{
      console.log(res);
      this.isSave=true;
      this.isErr=false;
    },(err)=>{
      console.log(err);
      this.isErr=true;
    });
  }

  updateUser(userreq)
  {
    this._userService.update(userreq)
    .subscribe( (res:User)=>{
      console.log(res);
      this.isUpdate=true;
      this.isErr=false;
    },(err)=>{
      console.log(err);
      this.isErr=true;
    });
  }

  get f() { return this.formUserGroup.controls; }

}