import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { CardsPage } from '../cards/cards';
import { ConnectivityService } from '../../providers/connectivity-service/connectivity-service';
import { LoadingController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Intro } from '../intro/intro';
import { ProfilePage } from '../profile/profile';
import { PromocodePage } from '../promocode/promocode';
import { PaymentsPage } from '../payments/payments';
import { ContactUsPage } from '../contact-us/contact-us';
import { SettingsPage } from '../settings/settings';
import { ReportPage } from '../report/report';

declare var google;

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
	loader: any;
	  goToCardsPage(){
    this.navCtrl.push(CardsPage);}

		presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'No Connection',
    subTitle: 'Please Turn On the Internet',
    buttons: ['Dismiss']
  });
  alert.present();
}

presentLoading() {

    this.loader = this.loadingCtrl.create({
      content: "Fetching Maps..."
    });

    this.loader.present();

  }


@ViewChild('map') mapElement: ElementRef;

  map: any;
  mapInitialised: boolean = false;
  apiKey: any;//AIzaSyD6hMHss5-A960JlIu2T6cvD4H3HIylvns

  constructor(platform: Platform, public navCtrl: NavController, public connectivityService: ConnectivityService, public geolocation: Geolocation, public alertCtrl: AlertController,  public loadingCtrl: LoadingController, public storage: Storage) {

		this.presentLoading();
	platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
        this.loader.dismiss();

});

  }


ionViewDidLoad() {
this.storage.get('intro-done').then(done => {
this.storage.clear();//REMOVE WHILE DEPLOYING
if (!done) {
      this.storage.set('intro-done', true);
      this.navCtrl.setRoot(Intro);
    }
  });
this.loadMap();
}



loadMap(){

    this.addConnectivityListeners();

  if(typeof google == "undefined" || typeof google.maps == "undefined"){

    console.log("Google maps JavaScript needs to be loaded.");
    this.disableMap();

    if(this.connectivityService.isOnline()){
      console.log("online, loading map");

      //Load the SDK
      window['mapInit'] = () => {
        this.initMap();
        this.enableMap();
      }

      let script = document.createElement("script");
      script.id = "googleMaps";

      if(this.apiKey){
        script.src = 'http://maps.google.com/maps/api/js?key=AIzaSyD6hMHss5-A960JlIu2T6cvD4H3HIylvns' + '&callback=mapInit';
      } else {
        script.src = 'http://maps.google.com/maps/api/js?key=AIzaSyD6hMHss5-A960JlIu2T6cvD4H3HIylvns&callback=mapInit';
      }

      document.body.appendChild(script);

    }
  }
  else {

    if(this.connectivityService.isOnline()){
      console.log("showing map");
      this.initMap();
      this.enableMap();
    }
    else {
      console.log("disabling map");
      this.disableMap();
    }

  }

  }

  initMap(){

    this.mapInitialised = true;

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
	disableDefaultUI: true,
	styles:[   {     "elementType": "geometry",     "stylers": [       {         "color": "#1d2c4d"       }     ]   },   {     "elementType": "labels.text.fill",     "stylers": [       {         "color": "#8ec3b9"       }     ]   },   {     "elementType": "labels.text.stroke",     "stylers": [       {         "color": "#1a3646"       }     ]   },   {     "featureType": "administrative.country",     "elementType": "geometry.stroke",     "stylers": [       {         "color": "#4b6878"       }     ]   },   {     "featureType": "administrative.land_parcel",     "elementType": "labels.text.fill",     "stylers": [       {         "color": "#64779e"       }     ]   },   {     "featureType": "administrative.province",     "elementType": "geometry.stroke",     "stylers": [       {         "color": "#4b6878"       }     ]   },   {     "featureType": "landscape.man_made",     "elementType": "geometry.stroke",     "stylers": [       {         "color": "#334e87"       }     ]   },   {     "featureType": "landscape.natural",     "elementType": "geometry",     "stylers": [       {         "color": "#023e58"       }     ]   },   {     "featureType": "poi",     "elementType": "geometry",     "stylers": [       {         "color": "#283d6a"       }     ]   },   {     "featureType": "poi",     "elementType": "labels.text.fill",     "stylers": [       {         "color": "#6f9ba5"       }     ]   },   {     "featureType": "poi",     "elementType": "labels.text.stroke",     "stylers": [       {         "color": "#1d2c4d"       }     ]   },   {     "featureType": "poi.business",     "stylers": [       {         "visibility": "off"       }     ]   },   {     "featureType": "poi.park",     "elementType": "geometry.fill",     "stylers": [       {         "color": "#023e58"       }     ]   },   {     "featureType": "poi.park",     "elementType": "labels.text",     "stylers": [       {         "visibility": "off"       }     ]   },   {     "featureType": "poi.park",     "elementType": "labels.text.fill",     "stylers": [       {         "color": "#3C7680"       }     ]   },   {     "featureType": "road",     "elementType": "geometry",     "stylers": [       {         "color": "#304a7d"       }     ]   },   {     "featureType": "road",     "elementType": "labels.text.fill",     "stylers": [       {         "color": "#98a5be"       }     ]   },   {     "featureType": "road",     "elementType": "labels.text.stroke",     "stylers": [       {         "color": "#1d2c4d"       }     ]   },   {     "featureType": "road.highway",     "elementType": "geometry",     "stylers": [       {         "color": "#2c6675"       }     ]   },   {     "featureType": "road.highway",     "elementType": "geometry.stroke",     "stylers": [       {         "color": "#255763"       }     ]   },   {     "featureType": "road.highway",     "elementType": "labels.text.fill",     "stylers": [       {         "color": "#b0d5ce"       }     ]   },   {     "featureType": "road.highway",     "elementType": "labels.text.stroke",     "stylers": [       {         "color": "#023e58"       }     ]   },   {     "featureType": "transit",     "elementType": "labels.text.fill",     "stylers": [       {         "color": "#98a5be"       }     ]   },   {     "featureType": "transit",     "elementType": "labels.text.stroke",     "stylers": [       {         "color": "#1d2c4d"       }     ]   },   {     "featureType": "transit.line",     "elementType": "geometry.fill",     "stylers": [       {         "color": "#283d6a"       }     ]   },   {     "featureType": "transit.station",     "elementType": "geometry",     "stylers": [       {         "color": "#3a4762"       }     ]   },   {     "featureType": "water",     "elementType": "geometry",     "stylers": [       {         "color": "#0e1626"       }     ]   },   {     "featureType": "water",     "elementType": "labels.text.fill",     "stylers": [       {         "color": "#4e6d70"       }     ]   } ] ,
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    });

  }

  disableMap(){
    console.log("disable map");
  }

  enableMap(){
    console.log("enable map");
  }


  addConnectivityListeners(){

    let onOnline = () => {

      setTimeout(() => {
        if(typeof google == "undefined" || typeof google.maps == "undefined"){

          this.loadMap();

        } else {

          if(!this.mapInitialised){
            this.initMap();
          }

          this.enableMap();
        }
      }, 2000);

    };

    let onOffline = () => {
	this.presentAlert();
	this.disableMap();
    };

    document.addEventListener('online', onOnline, false);
    document.addEventListener('offline', onOffline, false);

  }

  /*
  * Navigation functions
  */

  goToProfile(){
    this.navCtrl.push(ProfilePage);
  }

  goToPromocode(){
    this.navCtrl.push(PromocodePage);
  }

  goToPayments(){
    this.navCtrl.push(PaymentsPage);
  }

  goToContactUs(){
    this.navCtrl.push(ContactUsPage);
  }

  goToSettings(){
    this.navCtrl.push(SettingsPage);
  }

  goToReport(){
    this.navCtrl.push(ReportPage);
  }

}
