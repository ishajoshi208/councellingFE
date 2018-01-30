import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventPage } from '../event/event';
import { UserProvider } from '../../providers/user/user';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userForm: FormGroup;
  token: any;
  userId: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, public user: UserProvider) {
    this.userForm = this.formBuilder.group({
      'username': [''],
      'password': ['']
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  createAccount() {
    this.navCtrl.push(SignupPage)
  }

  async onLogin() {
    let data = await this.userForm.value;
    let loginData = await this.user.login(data)
    console.log("login data", loginData);
    this.token=await loginData.json().token;
    this.userId= await loginData.json().data;
    console.log("token",this.token);
    console.log("userid",this.userId);
    if (loginData.status = 200) {
      this.navCtrl.push(EventPage);
    }
    this.user.dataPassing(this.token,this.userId);
    // 
  }

}
