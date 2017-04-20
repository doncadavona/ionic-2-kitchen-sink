import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Slides } from './slides';

@NgModule({
  declarations: [
    Slides,
  ],
  imports: [
    IonicPageModule.forChild(Slides),
  ],
  exports: [
    Slides
  ]
})
export class SlidesModule {}
