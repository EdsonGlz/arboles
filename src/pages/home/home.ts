import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { findTopNavs } from 'ionic-angular/umd/components/app/app';
import { query } from '@angular/core/src/render3/instructions';
import { ImagenPage } from '../imagen/imagen';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  db: firebase.firestore.Firestore;
  user: firebase.User;
  imagenpage = ImagenPage
 

  items = [];

  constructor(public navCtrl: NavController,  public camera: Camera ) {
    this.user = firebase.auth().currentUser;
    this.db = firebase.firestore();
    this.db.collection('imagenes').onSnapshot(query => {
      this.items = [];
      query.forEach(imagen => {
        if (imagen.data().user == this.user.uid){
          this.items.push(imagen.data());
          
        }
      });
    });
  }

  getPicture(){
     const options ={
       quality: 100,
       destinationType: this.camera.DestinationType.DATA_URL,
       encodingType: this.camera.EncodingType.JPEG,
       mediaType: this.camera.MediaType.PICTURE
     };
     this.camera.getPicture(options)
     .then(imagen => {

       this.navCtrl.push(this.imagenpage, {imagen: 'data:image/jpeg;base64,' + imagen});
   }, error => {
     console.log(JSON.stringify(error));
     });
   }

}
