import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Cards } from './cards';

@NgModule({
  declarations: [
    Cards,
  ],
  imports: [
    IonicPageModule.forChild(Cards),
  ],
  exports: [
    Cards
  ]
})
export class CardsModule {}
