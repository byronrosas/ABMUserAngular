import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  pageEvent:PageEvent;

  constructor() { }

  ngOnInit() {    
  }

}
