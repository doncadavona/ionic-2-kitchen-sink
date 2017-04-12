import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  FormGroup,
  FormControl

} from '@angular/forms';

/**
 * Generated class for the Radio page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-radio',
  templateUrl: 'radio.html',
})
export class Radio {

	langs;
  langForm;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.langForm = new FormGroup({
      "langs": new FormControl({value: 'rust', disabled: false})
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Radio');
  }

  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }
}
