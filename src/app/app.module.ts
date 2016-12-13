import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import {CloudSettings, CloudModule} from '@ionic/cloud-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SinglePage } from '../pages/single/single';
import { CommentPage } from '../pages/comment/comment';
import { MannschaftPage } from '../pages/mannschaft/mannschaft';
import { NewsPage } from '../pages/news/news';
import { LoginPage } from '../pages/login/login';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'ab8b6d01'
  }
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
	SinglePage,
	CommentPage,
	MannschaftPage,
    NewsPage,
	LoginPage 
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	SinglePage,
	CommentPage,
	MannschaftPage,
    NewsPage,
	LoginPage
  ],
  providers: []
})
export class AppModule {}
