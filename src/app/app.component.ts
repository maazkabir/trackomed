import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  rootPage:any = HomePage;
	
	
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
	
	firebase.initializeApp({
    apiKey: "AIzaSyAqxZ5NZNM2n97k2YcM2Xqsbu7CM7M7hHc",
    authDomain: "trackomed-3671d.firebaseapp.com",
    databaseURL: "https://trackomed-3671d.firebaseio.com",
    projectId: "trackomed-3671d",
    storageBucket: "trackomed-3671d.appspot.com",
    messagingSenderId: "682956519321"
});

 platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.    
	statusBar.styleDefault();
      splashScreen.hide();
	

});
  }

}

  
