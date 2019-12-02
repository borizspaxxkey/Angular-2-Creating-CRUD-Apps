import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myProp: string = 'Go ahead, click that button';

  myArr = [
    { 'title': 'My blog title', 'desc': 'My blog description' },
    { 'title': 'My blog title', 'desc': 'My blog description' },
    { 'title': 'My blog title', 'desc': 'My blog description' },
  ];

  myMethod() {
    this.myProp = 'That button above me was clicked';
  }
}
