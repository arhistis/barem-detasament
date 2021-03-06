import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clicked: boolean;
  visible: boolean;
  nume: String;
  varsta: Number;
  context: String;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.clicked = false;
    this.visible = false;
  }

  hideButton(){
    this.clicked=true;
    setTimeout(() => {
      this.visible=true;
      this.router.navigate(['informatii-victima']);
    }, 500);
  }

  reverseClick(){
    this.clicked = false;
    this.visible = false;
  }

}
