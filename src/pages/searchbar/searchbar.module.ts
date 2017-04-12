import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Searchbar } from './searchbar';

@NgModule({
  declarations: [
    Searchbar,
  ],
  imports: [
    IonicPageModule.forChild(Searchbar),
  ],
  exports: [
    Searchbar
  ]
})
export class SearchbarModule {}
