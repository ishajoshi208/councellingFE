import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserProvider } from '../../providers/user/user';


/**
 * Generated class for the FeelingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-feeling',
  templateUrl: 'feeling.html',
})
export class FeelingPage {
  userForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public user: UserProvider,
    private formBuilder: FormBuilder) {
      this.userForm = this.formBuilder.group({
        'feeling': ['']
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeelingPage');
  }

  async onAddFeelings(){
    let data = await this.userForm.value;
    let feelingData = await this.user.feelingSubmit(data);
    console.log("feeling data", feelingData);
    if (feelingData.status == 200) {
     console.log("successfully submitted");
    }
  }

}
