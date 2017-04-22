import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Toolbar } from './toolbar';

@NgModule({
  declarations: [
    Toolbar,
  ],
  imports: [
    IonicPageModule.forChild(Toolbar),
  ],
  exports: [
    Toolbar
  ]
})
export class ToolbarModule {}
