import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.clicked = false;
    this.visible = false;
  }

  hideButton(){
    this.clicked=true;
    setTimeout(() => {
      this.visible=true;
    }, 500);

  }

  reverseClick(){
    this.clicked = false;
    this.visible = false;
  }

  show(){
    console.log(this.nume,this.varsta,this.context);
  }

}
