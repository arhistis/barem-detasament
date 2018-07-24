import { LesionService } from './../../services/lesion.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-page-1',
  templateUrl: './page-1.component.html',
  styleUrls: ['./page-1.component.scss']
})
export class Page1Component implements OnInit {

  clicked = false;
  nume: String;
  varsta: Number;
  context: String;

  constructor(
    private router: Router,
    private lesionService: LesionService
  ) { }

  ngOnInit() {
    var info = this.lesionService.getVictimInfo();
    console.log(info);
    this.nume = info.nume;
    this.varsta = info.varsta;
    this.context = info.context;
    console.log(this.nume);
  }

  nextPage() {
    this.lesionService.setVictimInfo(this.nume, this.varsta, this.context);
    this.clicked = true;
    setTimeout(() => {
      this.router.navigate(['leziuni-victima']);
    }, 300);
  }

  previousPage() {
    this.clicked = true;
    setTimeout(() => {
      this.router.navigate(['../']);
    }, 300);
  }

}
