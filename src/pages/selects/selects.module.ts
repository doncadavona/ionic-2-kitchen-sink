import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Selects } from './selects';

@NgModule({
  declarations: [
    Selects,
  ],
  imports: [
    IonicPageModule.forChild(Selects),
  ],
  exports: [
    Selects
  ]
})
export class SelectsModule {}
