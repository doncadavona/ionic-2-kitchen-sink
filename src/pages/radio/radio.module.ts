import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Radio } from './radio';

@NgModule({
  declarations: [
    Radio,
  ],
  imports: [
    IonicPageModule.forChild(Radio),
  ],
  exports: [
    Radio
  ]
})
export class RadioModule {}
