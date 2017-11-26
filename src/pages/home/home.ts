import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera} from 'ionic-native';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ Storage ]

})
export class HomePage {
public base64Image: string;
  constructor(public navCtrl: NavController, public storage: Storage) {

  }

  takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.storage.set('foto', this.base64Image);
        this.storage.get('foto').then((val) => {
          console.log(val);
        })

    }, (err) => {
        console.log(err);
    });
  }

  

}
