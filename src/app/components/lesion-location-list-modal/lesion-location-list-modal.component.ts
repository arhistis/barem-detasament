import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Lesion } from '../../types/lesion';
import { BsModalRef, BsModalService } from '../../../../node_modules/ngx-bootstrap';

@Component({
  selector: 'app-lesion-location-list-modal',
  templateUrl: './lesion-location-list-modal.component.html',
  styleUrls: ['./lesion-location-list-modal.component.scss']
})
export class LesionLocationListModalComponent implements OnInit {

  @Output() selectedLocation = new EventEmitter<String>();
  locations: String[];

  constructor(
    private bsModalRef: BsModalRef,
  ) { }

  ngOnInit() {
  }

  select(location: String) {
    this.bsModalRef.hide();
    this.selectedLocation.emit(location);
  }

  hide() {
    this.bsModalRef.hide();
  }

}
