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
import { ProfilePage } from '../pages/profile/profile';
import { PromocodePage } from '../pages/promocode/promocode';
import { PaymentsPage } from '../pages/payments/payments';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { SettingsPage } from '../pages/settings/settings';
import { ReportPage } from '../pages/report/report';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { ToastController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { CarePage } from '../pages/care/care';
import { FtrimesterPage } from '../pages/ftrimester/ftrimester';
import { StrimesterPage } from '../pages/strimester/strimester';
import { TtrimesterPage } from '../pages/ttrimester/ttrimester';
import { DonatePage } from '../pages/donate/donate';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CardsPage,
    Intro,
    LoginPage,
    ProfilePage,
    PromocodePage,
    PaymentsPage,
    ContactUsPage,
    SettingsPage,
    ReportPage,
    CarePage,
    FtrimesterPage,
    StrimesterPage,
    TtrimesterPage,
    DonatePage
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
    LoginPage,
    ProfilePage,
    PromocodePage,
    PaymentsPage,
    ContactUsPage,
    SettingsPage,
    ReportPage,
    CarePage,
    FtrimesterPage,
    StrimesterPage,
    TtrimesterPage,
    DonatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ConnectivityService,
    Geolocation,
    Network,
    GooglePlus,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
