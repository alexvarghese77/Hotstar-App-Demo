import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import {ContentService} from '../../service/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  @Output() heading: EventEmitter<any> = new EventEmitter();
    pagenum:number=1;
    maxpagenum:number=1;
    data=[];
    pageinfo:any;
    isSearch: boolean;
   
  constructor( private contentService:ContentService) { 
  }
    ngOnInit(){
    //get the first page data
    this.contentService.getContent(this.pagenum).then(result=>
      {
        this.data=result['content-items'].content;
        this.pageinfo=result;
        this.maxpagenum=Math.ceil(result['total-content-items']/result['page-size-requested']);  //calculate and set max page number
        this.heading.emit(this.pageinfo.title);  //set the title in the header component
      });
  }

  onScroll(){
    this.pagenum=this.pagenum+1;   //increment pagenumbetr by one when scrolling 
    if(this.pagenum<=this.maxpagenum){
      this.contentService.getContent(this.pagenum).then(result=>{         //fetching the  data
        this.data.push(...result['content-items'].content);
        this.pageinfo=result;
      });
    }
    
  }
  
  //enable and disable search screen
  search() {
    this.isSearch = true;
  }

  onCancel() {
    this.isSearch = false;
  }

}
