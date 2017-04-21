import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Tab1 } from './tab1';
import { Tab2 } from './tab2';

/**
 * Generated class for the Tabs page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
// @Component({
//   selector: 'page-tabs',
//   templateUrl: 'tabs.html',
// })

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class Tabs {

	tab1: any;
  tab2: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.tab1 = Tab1;
    this.tab2 = Tab2;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs');
  }

}
