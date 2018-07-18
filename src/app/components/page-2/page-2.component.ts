import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-page-2',
  templateUrl: './page-2.component.html',
  styleUrls: ['./page-2.component.scss']
})
export class Page2Component implements OnInit {

  clicked = false;

  lesions: {
    lesion: String,
    location: String
  }[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  addLesion(){
    this.lesions.push({lesion: "Agitatie", location: "peste tot"});
  }

  previousPage() {
    this.clicked = true;
    setTimeout(() => {
      this.router.navigate(['informatii-victima']);
    }, 300);
  }

}
