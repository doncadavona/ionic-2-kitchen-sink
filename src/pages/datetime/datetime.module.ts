import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Datetime } from './datetime';

@NgModule({
  declarations: [
    Datetime,
  ],
  imports: [
    IonicPageModule.forChild(Datetime),
  ],
  exports: [
    Datetime
  ]
})
export class DatetimeModule {}
