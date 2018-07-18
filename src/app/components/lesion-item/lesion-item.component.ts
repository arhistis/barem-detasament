import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lesion-item',
  templateUrl: './lesion-item.component.html',
  styleUrls: ['./lesion-item.component.scss']
})
export class LesionItemComponent implements OnInit {

  @Input() lesionName: String;
  @Input() lesionLocation: String;

  constructor() { }

  ngOnInit() {
  }

}
