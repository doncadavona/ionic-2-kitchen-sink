import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Lists page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html',
})
export class Lists {

	items: Array<{name: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.items = [];
  	for(let i=1; i<=10; i++) {
  		this.items.push({name: 'Item ' + i});
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Lists');
  }

}
