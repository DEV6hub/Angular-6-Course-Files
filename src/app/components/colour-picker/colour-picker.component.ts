import { Component, OnInit, Input, Output } from '@angular/core';
import { Shirt, Colour } from '../../shared/shirt';
import { Subscription } from 'rxjs';
import { ShirtService } from '../../core/shirt.service';
import { EventEmitter } from '@angular/core';
import { COLOURS } from '../../constants/static-data.constants';

@Component({
  selector: 'app-colour-picker',
  templateUrl: './colour-picker.component.html',
  styleUrls: ['./colour-picker.component.css']
})
export class ColourPickerComponent implements OnInit {

  colours = COLOURS;

  @Input() title: string;
  @Input() selectedColour: Colour;
  @Output() selectedColourChange: EventEmitter<Colour>;

  constructor(private shirtService: ShirtService) {
    this.selectedColourChange = new EventEmitter<Colour>();
  }

  ngOnInit() {
  }

  pickColour(colour: Colour): void {
    this.selectedColourChange.emit(colour);
  }

  showSelected(colour: Colour): boolean {
    if (this.selectedColour) {
     return this.selectedColour.name.toLowerCase() === colour.name.toLowerCase()
    }
    return false;
  }
}
