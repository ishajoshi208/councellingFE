import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FeelingPage } from '../feeling/feeling';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserProvider } from '../../providers/user/user';


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
  userForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public user: UserProvider,
    private formBuilder: FormBuilder) {
      this.userForm = this.formBuilder.group({
        'emotion': ['']
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmotionPage');
  }

  async onAddEmotions(){
    let data = await this.userForm.value;
    let emotionData = await this.user.emotionSubmit(data);
    console.log("emotion data", emotionData);
    if (emotionData.status == 200) {
      this.navCtrl.push(FeelingPage)
    }
    
  }
}
