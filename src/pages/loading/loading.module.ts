import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Loading } from './loading';

@NgModule({
  declarations: [
    Loading,
  ],
  imports: [
    IonicPageModule.forChild(Loading),
  ],
  exports: [
    Loading
  ]
})
export class LoadingModule {}
