import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { ModalPage } from './modal-page';

/**
 * Generated class for the Modals page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modals',
  templateUrl: 'modals.html',
})
export class Modals {

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Modals');
  }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalPage, characterNum);
    modal.present();
  }

}


