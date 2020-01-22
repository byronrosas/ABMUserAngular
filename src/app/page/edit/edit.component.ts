import { User } from 'src/app/models';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public user:User;

  constructor(public _userService:UserService, private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getUser(this.activeRoute.snapshot.params.id);
  }

  // get user
  getUser(id) {
    this._userService.getById(id)
      .subscribe((res: User) => {
        this.user = res;
      }, (err) => {
        console.log(err);
      });
  }

}
