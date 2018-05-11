import { Component, OnInit } from '@angular/core';
import {ContentService} from '../../service/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
   arr=[];

    pagenum:number=1;
    data=[];
    pageinfo:any;
    isSearch: boolean;

  constructor( private contentService:ContentService) { 
    this.arr = Array(100).fill(0).map((_, i) => i + 1);
  }

    ngOnInit(){
    this.contentService.getHeroes(this.pagenum).then(result=>
      {
        this.data=result['content-items'].content;
        this.pageinfo=result;

      });
    console.log("data",this.data);
  }

  onScroll(){
    this.pagenum=this.pagenum+1;
    console.log(this.pagenum);
    this.contentService.getHeroes(this.pagenum).then(result=>{
    this.data.push(...result['content-items'].content);
    this.pageinfo=result;
  });
  }
  
  search() {
    this.isSearch = true;
  }

  onCancel() {
    this.isSearch = false;
  }

}
