import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EmotionPage } from '../emotion/emotion';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the DisputePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dispute',
  templateUrl: 'dispute.html',
})
export class DisputePage {
  userForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public user: UserProvider,
    private formBuilder: FormBuilder) {
      this.userForm = this.formBuilder.group({
        'event': ['']
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisputePage');
  }

  async onAddDisputes(){
    let data = await this.userForm.value;
    let disputeData = await this.user.disputeSubmit(data);
    console.log("dispute data", disputeData);
    if (disputeData.status == 200) {
      this.navCtrl.push(EmotionPage);
    }
   
  }

}
