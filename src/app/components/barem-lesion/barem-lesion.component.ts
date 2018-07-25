import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Lesion } from '../../types/lesion';

@Component({
  selector: 'app-barem-lesion',
  templateUrl: './barem-lesion.component.html',
  styleUrls: ['./barem-lesion.component.scss']
})
export class BaremLesionComponent implements OnInit {

  @Input() lesion: Lesion;
  @Output() scorModifier = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  sendScor(scor: number){
    this.scorModifier.emit(scor);
  }

}
