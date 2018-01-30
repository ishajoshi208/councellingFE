import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConsequencePage } from '../consequence/consequence';
import { UserProvider } from '../../providers/user/user';
import { FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the BeliefPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-belief',
  templateUrl: 'belief.html',
})
export class BeliefPage {
  userForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public user: UserProvider,
    private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      'belief': ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeliefPage');
  }

  async onAddBelief() {
    let data = await this.userForm.value;
    let beliefData = await this.user.beliefSubmit(data);
    console.log("belief data", beliefData);
    if (beliefData.status == 200) {
      this.navCtrl.push(ConsequencePage);
    }
  }

}
