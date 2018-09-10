import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { LesionService } from '../../services/lesion.service';
import { Lesion } from '../../types/lesion';
import { Victim } from '../../types/victim';

@Component({
  selector: 'app-barem-sef-echipaj',
  templateUrl: './barem-sef-echipaj.component.html',
  styleUrls: ['./barem-sef-echipaj.component.scss']
})
export class BaremSefEchipajComponent implements OnInit {

  clicked = false;
  scor: number = 0;
  scorTotal: number = 0;

  lesions: Lesion[];

  liderLesions: Lesion[];

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
    this.liderLesions = this.lesionService.getLiderLesions();
    this.victim = this.lesionService.getVictim();
    this.victim.leziuni.forEach(lesion => {
      lesion.lesion.manevre.forEach(manevra => {
        this.scorTotal += manevra.punctajMaxim;
      });
    });
    this.liderLesions.forEach(lesion => {
      lesion.manevre.forEach(manevra => {
        this.scorTotal += manevra.punctajMaxim;
      });
    });
  }

  previousPage() {
    this.clicked = true;
    setTimeout(() => {
      this.router.navigate(['']);
    }, 300);
  }

  calculateScor(scor: number) {
    if (scor)
      this.scor += scor;
  }

}
