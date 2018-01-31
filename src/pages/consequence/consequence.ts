import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DisputePage } from '../dispute/dispute';
import { UserProvider } from '../../providers/user/user';
import { FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the ConsequencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-consequence',
  templateUrl: 'consequence.html',
})
export class ConsequencePage {
  userForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public user: UserProvider,
    private formBuilder: FormBuilder) {
      this.userForm = this.formBuilder.group({
        'consequence': ['']
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsequencePage');
  }

  async onAddConsequences(){
    let data = await this.userForm.value;
    let consequenceData = await this.user.consequenceSubmit(data);
    console.log("consequence data", consequenceData);
    if (consequenceData.status == 200) {
      this.navCtrl.push(DisputePage);
    }
  }

}
