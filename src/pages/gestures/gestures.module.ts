import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Gestures } from './gestures';

@NgModule({
  declarations: [
    Gestures,
  ],
  imports: [
    IonicPageModule.forChild(Gestures),
  ],
  exports: [
    Gestures
  ]
})
export class GesturesModule {}
