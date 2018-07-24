import { LesionService } from './../../services/lesion.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { Lesion } from '../../types/lesion';
import { Victim } from '../../types/victim';

@Component({
  selector: 'app-barem',
  templateUrl: './barem.component.html',
  styleUrls: ['./barem.component.scss']
})
export class BaremComponent implements OnInit {

  clicked = false;

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
    this.victim = this.lesionService.getVictim();
    console.log(this.victim.leziuni);
  }

  previousPage() {
    this.clicked = true;
    setTimeout(() => {
      this.router.navigate(['leziuni-victima']);
    }, 300);
  }

}
