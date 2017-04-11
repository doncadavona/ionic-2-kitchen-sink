import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Lists } from './lists';

@NgModule({
  declarations: [
    Lists,
  ],
  imports: [
    IonicPageModule.forChild(Lists),
  ],
  exports: [
    Lists
  ]
})
export class ListsModule {}
