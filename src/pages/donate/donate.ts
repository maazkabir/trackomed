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

  /******initializeItems(){
    this.items = {
      {"name":"Crocin","place":"Madan Medical","lat":"17.3938736","long":"78.4427487"},
      {"name":"Brakke","place":"Madan Medical","lat":"17.3938736","long":"78.4427487"},
      {"name":"Panadol","place":"SS Medical Hall","lat":"17.3920913","long":"78.441873"},
      {"name":"Calpal","place":"SS Medical Hall","lat":"17.3920913","long":"78.441873"},
      {"name":"Octavin","place":"Rayyan Medical Hall","lat":"17.3796117","long":"78.4286807"},
      {"name":"Advil","place":"Rayyan Medical Hall","lat":"17.3796117","long":"78.4286807"},
      {"name":"Concor","place":"Mohan Medical Hall","lat":"7.3916576","long":"78.4259753"},
      {"name":"Soframacin","place":"Mohan Medical Hall","lat":"7.3916576","long":"78.4259753"},
      {"name":"Dettol","place":"Sri Sai Hemanth Medical Hall General Stores","lat":"17.3626936","long":"78.4178855"},
      {"name":"Savlon","place":"Sri Sai Hemanth Medical Hall General Stores","lat":"17.3626936","long":"78.4178855"},
      {"name":"Strepsils ","place":"Rayyan Medical Hall","lat":"17.3796117","long":"78.4286807"},


    }
  }******/
}
