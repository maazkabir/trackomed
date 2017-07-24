import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the DonatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-donate',
  templateUrl: 'donate.html',
})
export class DonatePage {

  private todo : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private toastCtrl: ToastController) {
    this.todo = this.formBuilder.group({
      name: [''],
      phone: [''],
      email: [''],
      donation: [''],
      title: ['', Validators.required],
      description: [''],
    });
  }

  presentToast() {
  let toast = this.toastCtrl.create({
    message: 'Thank You for your donation. We will contact you shortly! ',
    duration: 3000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
  this.navCtrl.push(HomePage);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonatePage');
  }

  logForm(){
    this.todo.reset();

  }
  goBack(){
    this.navCtrl.push(HomePage);
  }

}
