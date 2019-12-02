import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyDeeGlLzMEz4HChoZ4XMzKyv_DG2EM4cTM",
  authDomain: "chatapp-da861.firebaseapp.com",
  databaseURL: "https://chatapp-da861.firebaseio.com",
  projectId: "chatapp-da861",
  storageBucket: "chatapp-da861.appspot.com",
  messagingSenderId: "233574528065"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
