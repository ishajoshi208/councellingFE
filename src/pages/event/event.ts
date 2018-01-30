import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BeliefPage } from '../belief/belief';
import { UserProvider } from '../../providers/user/user';
import { FormBuilder, FormGroup } from '@angular/forms';


/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
  userForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public user: UserProvider,
    private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      'event': ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

  async onAddEvent() {
    let data = await this.userForm.value;
    let eventData = await this.user.eventSubmit(data);
    console.log("event data", eventData);
    if (eventData.status == 200) {
      this.navCtrl.push(BeliefPage);
    }
  }

}
