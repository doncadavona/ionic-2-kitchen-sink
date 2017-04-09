import { Component } from '@angular/core';
import { ActionSheetController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ActionSheets page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-action-sheets',
  templateUrl: 'action-sheets.html',
})
export class ActionSheets {

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	public actionSheetCtrl: ActionSheetController) {
  }

	presentActionSheet() {
	    let actionSheet = this.actionSheetCtrl.create({
	      title: 'Modify your album',
	      buttons: [
	        {
	          text: 'Destructive',
	          role: 'destructive',
	          handler: () => {
	            console.log('Destructive clicked');
	          }
	        },{
	          text: 'Archive',
	          handler: () => {
	            console.log('Archive clicked');
	          }
	        },{
	          text: 'Cancel',
	          role: 'cancel',
	          handler: () => {
	            console.log('Cancel clicked');
	          }
	        }
	      ]
	    });
	    actionSheet.present();
	}
}
