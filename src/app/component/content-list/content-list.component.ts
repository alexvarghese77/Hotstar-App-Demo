import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import {ContentService} from '../../service/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  @Output() heading: EventEmitter<any> = new EventEmitter();
    arr=[];
    pagenum:number=1;
    maxpagenum:number=1;
    data=[];
    pageinfo:any;
    isSearch: boolean;
   
  constructor( private contentService:ContentService) { 
  }
    ngOnInit(){
    this.contentService.getContent(this.pagenum).then(result=>
      {
        this.data=result['content-items'].content;
        this.pageinfo=result;
        this.maxpagenum=Math.ceil(result['total-content-items']/result['page-size-requested']);

        this.heading.emit(this.pageinfo.title);
      });
    console.log("data",this.data);
  }

  onScroll(){
    this.pagenum=this.pagenum+1;
    console.log(this.pagenum);
    if(this.pagenum<=this.maxpagenum){
      this.contentService.getContent(this.pagenum).then(result=>{
        this.data.push(...result['content-items'].content);
        this.pageinfo=result;
      });
    }
    
  }
  
  search() {
    this.isSearch = true;
  }

  onCancel() {
    this.isSearch = false;
  }

}
