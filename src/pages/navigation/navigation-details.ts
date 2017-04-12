import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'navigation-details.html',
})
export class NavigationDetails {
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}