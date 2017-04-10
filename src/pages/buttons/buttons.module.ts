import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Buttons } from './buttons';

@NgModule({
  declarations: [
    Buttons,
  ],
  imports: [
    IonicPageModule.forChild(Buttons),
  ],
  exports: [
    Buttons
  ]
})
export class ButtonsModule {}
