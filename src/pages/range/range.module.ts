import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Range } from './range';

@NgModule({
  declarations: [
    Range,
  ],
  imports: [
    IonicPageModule.forChild(Range),
  ],
  exports: [
    Range
  ]
})
export class RangeModule {}
