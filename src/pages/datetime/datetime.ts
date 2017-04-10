import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Datetime page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-datetime',
  templateUrl: 'datetime.html',
})
export class Datetime {
  
  // event.timeStarts

  event: {
  	dateStarts: Date,
  	timeStarts: Date,
  	dateEnds: Date,
  	timeEnds: Date,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.event = {
  		timeStarts: new Date(),
  		timeEnds: new Date(),
  		dateStarts: new Date(),
  		dateEnds: new Date()
  	};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Datetime');
  }

}
