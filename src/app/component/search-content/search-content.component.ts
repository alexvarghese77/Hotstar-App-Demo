import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.scss']
})
export class SearchContentComponent implements OnInit {
  @Output() close: EventEmitter<any> = new EventEmitter();
  items: Number[];
  constructor() {
    this.items = Array(55).fill(0).map((_, i) => i + 1)
  }

  ngOnInit() {
  }

  cancel() {
    this.close.emit(null);
  }
}
