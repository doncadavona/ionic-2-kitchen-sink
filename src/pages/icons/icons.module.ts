import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Icons } from './icons';

@NgModule({
  declarations: [
    Icons,
  ],
  imports: [
    IonicPageModule.forChild(Icons),
  ],
  exports: [
    Icons
  ]
})
export class IconsModule {}
