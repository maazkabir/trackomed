import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CardsPage } from '../pages/cards/cards';
import { ConnectivityService } from '../providers/connectivity-service/connectivity-service';
import { Network } from '@ionic-native/network';
import { IonicStorageModule } from '@ionic/storage';
import { Intro } from '../pages/intro/intro';
import { LoginPage } from '../pages/login/login';
import { GooglePlus } from '@ionic-native/google-plus';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CardsPage,
    Intro,
    LoginPage	
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CardsPage,
    Intro,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ConnectivityService,
    Geolocation,
    Network,
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
