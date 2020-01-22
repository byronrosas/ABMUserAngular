import { UserRequest } from './../../models/user-request';
import { UserService } from './../../services/user.service';
import { User } from 'src/app/models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() user: User;
  user_edit: UserRequest;
  isDelete: boolean = false;
  isErr: boolean = false;
  edit: boolean = false;
  constructor(public _userService: UserService) { }

  ngOnInit() {
    if (this.user) {
      this.user_edit.id = this.user.id;
      this.user_edit.name = this.user.first_name + " " + this.user.last_name;
      this.user_edit.job = "";
    }
  }

  deleteUser(user: User) {
    this._userService.delete(user.id)
      .subscribe((res) => {
        this.isDelete = true;
        this.isErr = false;
      }, (err) => {
        this.isDelete = false;
        this.isErr = true;
      });
  }

  edition() {
    this.edit = true;
    this.reset();
  }

  cancelEdit() {
    this.edit = false;
    this.reset();
  }

  reset() {
    this.isDelete = false;
    this.isErr = false;
  }
}
