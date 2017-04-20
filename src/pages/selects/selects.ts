import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Selects page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-selects',
  templateUrl: 'selects.html',
})
export class Selects {

	gaming: string = "n64";
  gender: string = "f";
  os: string;
  music: string;
  month: string;
  year: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.musicAlertOpts = {
      title: '1994 Music',
      subTitle: 'Select your favorite'
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Selects');
  }

  musicAlertOpts: { title: string, subTitle: string };

  stpSelect() {
    console.log('STP selected');
  }

}
