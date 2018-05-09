import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
   arr=[];
  constructor() { 
    this.arr = Array(100).fill(0).map((_, i) => i + 1);
  }

  ngOnInit() {
  }

}
