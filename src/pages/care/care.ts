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
      this.platform.ready().then((readySource) => {
      this.localNotifications.on('click', (notification, state) => {
        let json = JSON.parse(notification.data);

        let alert = alertCtrl.create({
          title: notification.title,
          subTitle: json.mydata
        });
        alert.present();
      })
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarePage');
  }

  scheduleNotification1() {
    this.platform.ready().then(()=>{
      this.localNotifications.schedule({
        id: 1,
        title: 'TrackoMed',
        text: 'Daily Dose',
        data: { mydata: 'Have Some Almonds' },
        at: new Date(new Date().getTime() + 2 * 1000)

      });

    });
    this.navCtrl.push(FtrimesterPage);

  }

  scheduleNotification2() {
    this.platform.ready().then(()=>{
      this.localNotifications.schedule({
        id: 1,
        title: 'TrackoMed',
        text: 'When Life Gives You Lemons,',
        data: { mydata: 'Make Lemonade!' },

        at: new Date(new Date().getTime() + 2 * 1000)
      });

    });
    this.navCtrl.push(StrimesterPage);

  }

  scheduleNotification3() {
    this.platform.ready().then(()=>{
      this.localNotifications.schedule({
        id: 1,
        title: 'TrackoMed',
        text: 'Sleep Time',
        data: { mydata: 'Have you Slept Yet?' },
        
        at: new Date(new Date().getTime() + 2 * 1000)
      });

    });
    this.navCtrl.push(TtrimesterPage);

  }


  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Thank You, You Will Be Notified!',
      duration: 3000,
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });

    toast.onDidDismiss(()=>{
      console.log('Dismissed Toast');
    });
    toast.present();

  }

}
