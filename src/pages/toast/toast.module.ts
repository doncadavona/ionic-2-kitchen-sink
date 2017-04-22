import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Toast } from './toast';

@NgModule({
  declarations: [
    Toast,
  ],
  imports: [
    IonicPageModule.forChild(Toast),
  ],
  exports: [
    Toast
  ]
})
export class ToastModule {}
