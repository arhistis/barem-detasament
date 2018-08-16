import { LesionService } from './../../services/lesion.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Lesion } from '../../types/lesion';
import { Observable } from '../../../../node_modules/rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { LesionLocationListModalComponent } from '../lesion-location-list-modal/lesion-location-list-modal.component';

@Component({
  selector: 'app-lesions-list-modal',
  templateUrl: './lesions-list-modal.component.html',
  styleUrls: ['./lesions-list-modal.component.scss']
})
export class LesionsListModalComponent implements OnInit {

  @Output() selectedLesion = new EventEmitter<object>();
  lesions: Lesion[];

  constructor(
    private bsModalRef: BsModalRef,
    private modalService: BsModalService,
    private lesionService: LesionService
  ) { }

  ngOnInit() {
    this.lesions = this.lesionService.getLesions2();

    // this.lesionService.getLesions()
    //   .catch((err) => {
    //     return Observable.throw(new Error(`${err.status} ${err.msg}`));
    //   })
    //   .subscribe(lesions => {
    //     this.lesions = lesions;
    //   });
  }

  hide() {
    this.bsModalRef.hide();
  }

  select(lesion: Lesion){
    if(lesion.locatie){
      const modalRef = this.modalService.show(LesionLocationListModalComponent,
        Object.assign({}, { class: 'lesions-modal', initialState: {locations: lesion.locatie}}));
      const modalContent = modalRef.content as LesionLocationListModalComponent;
      modalContent.selectedLocation.subscribe(res => {
        if (res) {
          this.selectedLesion.emit({ lesion: lesion, locatie: res });
          this.bsModalRef.hide();
        }
      });
    }
    else{
      this.selectedLesion.emit({ lesion: lesion, locatie: "" });
      this.bsModalRef.hide();
    }
  }

}
