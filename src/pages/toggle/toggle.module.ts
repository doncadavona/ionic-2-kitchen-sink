import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Toggle } from './toggle';

@NgModule({
  declarations: [
    Toggle,
  ],
  imports: [
    IonicPageModule.forChild(Toggle),
  ],
  exports: [
    Toggle
  ]
})
export class ToggleModule {}
