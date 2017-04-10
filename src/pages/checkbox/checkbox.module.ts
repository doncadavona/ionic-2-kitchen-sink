import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Checkbox } from './checkbox';

@NgModule({
  declarations: [
    Checkbox,
  ],
  imports: [
    IonicPageModule.forChild(Checkbox),
  ],
  exports: [
    Checkbox
  ]
})
export class CheckboxModule {}
