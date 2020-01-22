import { UserService } from './../../services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {  
  @Input() page:number;

  public users:User[]=[];

  constructor(public _userService:UserService) {}

  ngOnInit() {
    this._userService.get(this.page)
    .subscribe((res:any)=>{
      console.log(res);
    },(err)=>{
      console.log(err);
    });    
  }

}
