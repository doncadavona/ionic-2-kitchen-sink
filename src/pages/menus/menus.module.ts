import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Menus } from './menus';

@NgModule({
  declarations: [
    Menus,
  ],
  imports: [
    IonicPageModule.forChild(Menus),
  ],
  exports: [
    Menus
  ]
})
export class MenusModule {}
