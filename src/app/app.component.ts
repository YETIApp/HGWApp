import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Auth } from '@ionic/cloud-angular';

import { HomePage } from '../pages/home/home';
import { MannschaftPage } from '../pages/mannschaft/mannschaft';
import { NewsPage } from '../pages/news/news';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public auth: Auth) {
	this.initializeApp();

	this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'News', component: NewsPage },
	  { title: 'Mannschaft', component: MannschaftPage }
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

    initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component)
      .catch(()=>{
        console.log('User must be signed in');
      })
  }
  
  logOut(){
    this.auth.logout();
    this.nav.setRoot(LoginPage)
  }
}
