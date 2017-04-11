import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Fabs } from './fabs';

@NgModule({
  declarations: [
    Fabs,
  ],
  imports: [
    IonicPageModule.forChild(Fabs),
  ],
  exports: [
    Fabs
  ]
})
export class FabsModule {}
