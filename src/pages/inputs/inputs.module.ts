import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Inputs } from './inputs';

@NgModule({
  declarations: [
    Inputs,
  ],
  imports: [
    IonicPageModule.forChild(Inputs),
  ],
  exports: [
    Inputs
  ]
})
export class InputsModule {}
