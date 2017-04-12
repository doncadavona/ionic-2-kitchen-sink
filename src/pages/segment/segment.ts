import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the Segment page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-segment',
  templateUrl: 'segment.html',
})
export class Segment {

	pet: string = "puppies";
  isAndroid: boolean = false;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	platform: Platform
	) {
  	this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Segment');
  }

}
