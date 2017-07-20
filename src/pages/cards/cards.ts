import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';


declare var google;



@Component({
  selector: 'cards-page',
  templateUrl: 'cards.html'
})
export class CardsPage {

  constructor(public navCtrl: NavController, private geolocation : Geolocation) {

  }

  options : GeolocationOptions;
  currentPos : Geoposition;
  places : Array<any> ;
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  getUserPosition(){
      this.options = {
          enableHighAccuracy : true
      };

      this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

          this.currentPos = pos;
          console.log(pos);
          this.addMap(pos.coords.latitude,pos.coords.longitude);

      },(err : PositionError)=>{
          console.log("error : " + err.message);
      });
  }

  ionViewDidEnter(){
      this.getUserPosition();
  }

  addMap(lat,long){

      let latLng = new google.maps.LatLng(lat, long);

      let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.getRestaurants(latLng).then((results : Array<any>)=>{
        this.places = results;
        for(let i = 0 ;i < results.length ; i++)
        {
            this.createMarker(results[i]);
        }
    },(status)=>console.log(status));


      this.addMarker();

  }

  addMarker(){

      let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
      });

      let content = "<p>This is your current position !</p>";
      let infoWindow = new google.maps.InfoWindow({
      content: content
      });

      google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
      });

  }

  getRestaurants(latLng)
  {
    var service = new google.maps.places.PlacesService(this.map);


    let request = {
        location : latLng,
        radius : 8047 ,
        types: ['hospital']
    };
    return new Promise((resolve,reject)=>{
        service.nearbySearch(request,function(results,status){
            if(status === google.maps.places.PlacesServiceStatus.OK)
            {
                resolve(results);
            }else
            {
                reject(status);
            }

        });
    });

    }

    createMarker(place)
    {
      let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: place.geometry.location
    });
    }



}
