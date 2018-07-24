import { LesionService } from './../../services/lesion.service';
import { Lesion } from './../../types/lesion.d';
import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { BsModalService} from 'ngx-bootstrap';
import { LesionsListModalComponent } from '../lesions-list-modal/lesions-list-modal.component';

@Component({
  selector: 'app-page-2',
  templateUrl: './page-2.component.html',
  styleUrls: ['./page-2.component.scss']
})
export class Page2Component implements OnInit {

  clicked = false;

  lesions: {
    lesion: Lesion,
    location: String
  }[] = [];

  constructor(
    private router: Router,
    private modalService: BsModalService,
    private lesionService: LesionService
  ) { }

  ngOnInit() {
    this.lesions = this.lesionService.getVictimLesions();
  }

  addLesion(){
    const modalRef = this.modalService.show(LesionsListModalComponent, {class: "lesions-modal"});
    const modalContent = modalRef.content as LesionsListModalComponent;
    modalContent.selectedLesion.subscribe(res => {
      if (res) {
        this.lesions.push({lesion: res.lesion, location: res.locatie});
      }
    });
  }

  previousPage() {
    this.lesionService.setVictimLesions(this.lesions)
    this.clicked = true;
    setTimeout(() => {
      this.router.navigate(['informatii-victima']);
    }, 300);
  }

  nextPage() {
    this.lesionService.setVictimLesions(this.lesions)
    this.clicked = true;
    setTimeout(() => {
      this.router.navigate(['barem']);
    }, 300);
  }

  onDelete(index: number){
    this.lesions.splice(index,1);
  }

}
