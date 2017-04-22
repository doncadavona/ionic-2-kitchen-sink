import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the Toast page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class Toast {

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Toast');
  }

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Mmmm, buttered toast',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Your files were successfully saved',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  showLongToast() {
    let toast = this.toastCtrl.create({
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.',
      duration: 2000,
    });
    toast.present();
  }

}
