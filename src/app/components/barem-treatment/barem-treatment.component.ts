import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barem-treatment',
  templateUrl: './barem-treatment.component.html',
  styleUrls: ['./barem-treatment.component.scss']
})
export class BaremTreatmentComponent implements OnInit {

  checked: boolean = false;
  selected: number;

  @Input() manevra: any;
  @Output() selectedScor = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  selectScor(punctaj: number){
    if(this.selected == punctaj){
      this.selectedScor.emit(-this.selected);
      this.selected = null;
      this.checked = false;
    }
    else{
      if(this.selected != null)
        this.selectedScor.emit(-this.selected + punctaj);
      else
        this.selectedScor.emit(punctaj);
      this.selected = punctaj;
      this.checked = true;
    }
      
  }

}
