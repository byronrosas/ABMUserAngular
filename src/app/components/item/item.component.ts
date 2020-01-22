import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() user:User; 
  @Output() eventDelete:EventEmitter<User>=new EventEmitter();

  isErr:boolean;

  constructor(public _userService:UserService) { }

  ngOnInit() {
  }

  deleteUser(user:User) {
    this._userService.delete(user.id)
    .subscribe((res)=>{
      this.eventDelete.emit(user);
      this.isErr=false;
    },(err)=>{      
      this.isErr=true;
    });
  }

}
