import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import * as firebase from 'firebase';
import { LoginPage } from '../pages/login/login';
export const config = {
  apiKey: "AIzaSyCNMnYqh43KzIC1TSG54_cuYvcagn1Nh78",
  authDomain: "arboles-cc89e.firebaseapp.com",
  databaseURL: "https://arboles-cc89e.firebaseio.com",
  projectId: "arboles-cc89e",
  storageBucket: "arboles-cc89e.appspot.com",
  messagingSenderId: "502433985556",
  appId: "1:502433985556:web:6eb390b2a87994d0"
};
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

