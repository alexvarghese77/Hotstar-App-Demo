import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {ContentService} from '../../service/content.service';

@Component({
  selector: 'search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.scss']
})
export class SearchContentComponent implements OnInit {
  @Output() close: EventEmitter<any> = new EventEmitter();
  items: Number[];
  searchtxt:String='';
  data=[];
  searched:boolean=false;
  constructor(private contentService:ContentService) {
    this.items = Array(55).fill(0).map((_, i) => i + 1)
  }

  ngOnInit() {
  }

  cancel() {
    this.close.emit(null);
  }
  seachfn()
  {
    if(this.searchtxt!==''){
      this.data=this.contentService.searchcontent(this.searchtxt);
      this.searched=true;
    }
    
  }
}
