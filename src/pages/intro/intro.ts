import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
 
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class Intro {
 
  constructor(public navCtrl: NavController) {
 
  }
 
  goToHome(){
    this.navCtrl.push(LoginPage);
  }
 
}
