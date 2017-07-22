import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import firebase from 'firebase';

import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  fireauth = firebase.auth();

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  userProfile: any = null;

  constructor(public navCtrl: NavController, private googlePlus: GooglePlus) {
    firebase.auth().onAuthStateChanged( user => {
      if (user){
        this.userProfile = user;
      } else {
        this.userProfile = null;
      }
    });
  }

	gotohome(){
	this.navCtrl.setRoot(HomePage);
	}

  loginUser(): void {
  this.googlePlus.login({
    'webClientId': '682956519321-qc6vmccqiqjhceiuce3rna56hs8ikf75.apps.googleusercontent.com',
    'offline': true
  }).then( res => {
    firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      .then( success => {
        this.navCtrl.setRoot(HomePage);
        console.log("Firebase success: " + JSON.stringify(success));
      })
      .catch( error => console.log("Firebase failure: " + JSON.stringify(error)));
    }).catch(err => console.error("Error: ", err));
}

}
