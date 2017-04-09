import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Alerts } from './alerts';

@NgModule({
  declarations: [
    Alerts,
  ],
  imports: [
    IonicPageModule.forChild(Alerts),
  ],
  exports: [
    Alerts
  ]
})
export class AlertsModule {}
