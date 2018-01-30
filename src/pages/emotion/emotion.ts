import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FeelingPage } from '../feeling/feeling';

/**
 * Generated class for the EmotionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-emotion',
  templateUrl: 'emotion.html',
})
export class EmotionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmotionPage');
  }

  onAddEmotions(){
    this.navCtrl.push(FeelingPage)
  }
}
