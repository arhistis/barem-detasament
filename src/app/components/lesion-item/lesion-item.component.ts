import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lesion-item',
  templateUrl: './lesion-item.component.html',
  styleUrls: ['./lesion-item.component.scss']
})
export class LesionItemComponent implements OnInit {

  @Input() lesionName: String;
  @Input() lesionLocation: String;
  @Input() index: number;
  @Output() onDelete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  delete(){
    this.onDelete.emit(this.index);
  }

}
