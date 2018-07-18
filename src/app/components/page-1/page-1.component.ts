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
    private router: Router
  ) { }

  ngOnInit() {
    this.nume = "Cornel";
    this.varsta = 23;
    this.context = "context";
  }

  nextPage() {
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
