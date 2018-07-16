import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphicComponent implements OnInit {
  graphicName: string;

  constructor(private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.graphicName = this.route.snapshot.params.graphicName;
  }

}
