import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Platform } from 'ionic-angular';

declare var Connection;
/*
Generated class for the ConnectivityService provider.

See https://angular.io/docs/ts/...
for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ConnectivityService {

onDevice: boolean;

constructor(
public platform: Platform,
private network: Network) {
this.onDevice = this.platform.is('cordova');
}

isOnline(): boolean {
if(this.onDevice && this.network.type){
return this.network.type !== Connection.NONE;
} else {
return navigator.onLine;
}
}

isOffline(): boolean {
if(this.onDevice && this.network.type){
return this.network.type === Connection.NONE;
} else {
return !navigator.onLine;
}
}

}
