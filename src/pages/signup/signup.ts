import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserProvider } from '../../providers/user/user';
// import { LoginPage } from '../belief/belief';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  userForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder,
    public user: UserProvider) {
    this.userForm = this.formBuilder.group({
      name: [''],
      username: [''],
      email: [''],
      passwordGroup: this.formBuilder.group({
        password: [''],
        re_password: [''],
      }),
      phone: [''],
      user_type: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  async onSignUp() {
    // let data = this.userForm.value;
    let data = await (this.userForm.value);
    console.log("dataaaa", data);
    // this.navCtrl.push(LoginPage)
    let userData = await this.user.signup(data);
    console.log("userdata returned", userData);
    if (userData.status = 200) {
      this.navCtrl.push(LoginPage);
    }
  }
}
