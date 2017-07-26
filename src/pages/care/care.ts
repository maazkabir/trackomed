import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { ToastController } from 'ionic-angular';
import { FtrimesterPage } from '../ftrimester/ftrimester';
import { StrimesterPage } from '../strimester/strimester';
import { TtrimesterPage } from '../ttrimester/ttrimester';

/**
 * Generated class for the CarePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-care',
  templateUrl: 'care.html',
})
export class CarePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, private localNotifications: LocalNotifications, public alertCtrl: AlertController, private toastCtrl: ToastController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarePage');
  }

  scheduleNotification1() {
    this.platform.ready().then(()=>{
      this.localNotifications.schedule({
        id: 1,
        title: 'Trackomed',
        text: 'Notification 1',
        data: { mydata: 'My hidden message' },
        at: new Date(new Date().getTime() + 5 * 1000),
        icon: '../assets/Trackomed.png'
      });

    });
    this.navCtrl.push(FtrimesterPage);

  }

  scheduleNotification2() {
    this.platform.ready().then(()=>{
      this.localNotifications.schedule({
        id: 1,
        title: 'Trackomed',
        text: 'Notification 2',
        data: { mydata: 'My hidden message' },
        at: new Date(new Date().getTime() + 5 * 1000)
      });

    });
    this.navCtrl.push(StrimesterPage);

  }

  scheduleNotification3() {
    this.platform.ready().then(()=>{
      this.localNotifications.schedule({
        id: 1,
        title: 'Trackomed',
        text: 'Notification 3',
        data: { mydata: 'My hidden message' },
        at: new Date(new Date().getTime() + 5 * 1000)
      });

    });
    this.navCtrl.push(TtrimesterPage);

  }


  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'notofications On',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(()=>{
      console.log('Dismissed Toast');
    });
    toast.present();

  }

}
