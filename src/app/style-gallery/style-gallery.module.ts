import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllStyleOptionsComponent } from './all-style-options/all-style-options.component';
import { AllGraphicsComponent } from './all-graphics/all-graphics.component';
import { StyleColorsComponent } from './style-colors/style-colors.component';
import { GraphicComponent } from './graphic/graphic.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AllStyleOptionsComponent, AllGraphicsComponent, StyleColorsComponent, GraphicComponent]
})
export class StyleGalleryModule { }
