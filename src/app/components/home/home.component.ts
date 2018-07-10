import { Component, OnInit } from '@angular/core';
import { NgbTabContent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  verticalLogoPath = '../../../assets/images/Shirtastic-vertical.svg';
  fractalPath = '../../../assets/images/Fractal.png';

  constructor() { }

  ngOnInit() {
  }

}
