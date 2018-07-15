import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clicked: boolean;
  visible: boolean;

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

}
