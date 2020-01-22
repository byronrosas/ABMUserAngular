import { UserPage } from './../../models/user-page';
import { UserService } from './../../services/user.service';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { User } from 'src/app/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() page?: number;

  public users: User[] = [];

  constructor(public _userService: UserService) { }

  // page change in pagination
  ngOnChanges(changes) {
    const _page: SimpleChanges = changes.page;
    if (_page.currentValue != undefined) {
      //  get list user by page
      this.getUsers(_page.currentValue);
    }
  }

  ngOnInit() {
  }

  // get list users by page
  getUsers(page) {
    this._userService.get(page)
      .subscribe((res: UserPage) => {
        this.users = res.data;
      }, (err) => {
        console.log(err);
      });
  }

  // event delete item
  eventDeleteItem(index,e) {
    this.users.splice(index,1);
  }

}
