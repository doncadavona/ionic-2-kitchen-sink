import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverDetails } from './popover-details'

/**
 * Generated class for the Popover page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class Popover {

	@ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private popoverCtrl: PopoverController
	) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Popover');
  }

  presentPopover(ev) {

    let popover = this.popoverCtrl.create(PopoverDetails, {
      contentEle: this.content.nativeElement,
      textEle: this.text.nativeElement
    });

    popover.present({
      ev: ev
    });
  }

}
