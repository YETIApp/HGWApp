import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Mannschaft page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mannschaft',
  templateUrl: 'mannschaft.html'
})
export class MannschaftPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MannschaftPage Page');
  }

}
