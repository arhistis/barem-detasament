import { LesionService } from './../../services/lesion.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { Lesion } from '../../types/lesion';
import { Victim } from '../../types/victim';
import { Observable } from '../../../../node_modules/rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-barem',
  templateUrl: './barem.component.html',
  styleUrls: ['./barem.component.scss']
})
export class BaremComponent implements OnInit {

  clicked = false;
  scor: number = 0;
  scorTotal: number = 0;

  lesions: Lesion[];

  generalLesions: Lesion[];

  victim: Victim = {
    nume: "",
    varsta: null,
    context: "",
    leziuni: []
  };

  constructor(
    private router: Router,
    private lesionService: LesionService
  ) { }

  ngOnInit() {
    this.generalLesions = this.lesionService.getGeneralLesions();
    this.victim = this.lesionService.getVictim();
    this.victim.leziuni.forEach(lesion => {
      lesion.lesion.manevre.forEach(manevra => {
        this.scorTotal += manevra.punctajMaxim;
      });
    });
    this.generalLesions.forEach(lesion => {
      lesion.manevre.forEach(manevra => {
        this.scorTotal += manevra.punctajMaxim;
      });
    });
  }

  previousPage() {
    this.clicked = true;
    setTimeout(() => {
      this.router.navigate(['leziuni-victima']);
    }, 300);
  }

  calculateScor(scor: number){
    if (scor)
      this.scor += scor;
  }

  restart(){
    this.clicked = true;
    setTimeout(() => {
      this.lesionService.resetVictim();
      this.router.navigate(['informatii-victima']);
    }, 300);
  }

}
