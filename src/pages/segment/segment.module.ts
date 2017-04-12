import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Segment } from './segment';

@NgModule({
  declarations: [
    Segment,
  ],
  imports: [
    IonicPageModule.forChild(Segment),
  ],
  exports: [
    Segment
  ]
})
export class SegmentModule {}
