import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-style-options',
  templateUrl: './all-style-options.component.html',
  styleUrls: ['./all-style-options.component.css']
})
export class AllStyleOptionsComponent implements OnInit {
  data: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }
}
