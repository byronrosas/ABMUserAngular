import { UserRequest } from './../../models/user-request';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public formUserGroup: FormGroup;
  public user: UserRequest;
  constructor(private formBuilder: FormBuilder) {
    this.user = new UserRequest();
  }

  ngOnInit() {
    this.buildUserForm();
  }

  private buildUserForm() {
    this.formUserGroup = this.formBuilder.group({
      name: [this.user.name, Validators.required],
      job: [this.user.job, Validators.required]
    });
  }

  public onSubmit() {
    const newUser: UserRequest = Object.assign({}, this.formUserGroup.value);
    console.log(newUser);
  }

  get f() { return this.formUserGroup.controls; }

}