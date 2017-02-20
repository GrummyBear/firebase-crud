import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyADGs6S0Sty4lYF2Ua9P40wmnmx2lM9h5A",
  authDomain: "fir-crud-804db.firebaseapp.com",
  databaseURL: "https://fir-crud-804db.firebaseio.com",
  storageBucket: "fir-crud-804db.appspot.com",
  messagingSenderId: "92666157468"
};
@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

// src/app/app.module.ts
import {AF} from "../providers/af";
import { LoginPageComponent } from './login-page/login-page.component';
@NgModule(  declarations: [LoginPageComponent]
{
    ....,
  providers: [AF]
})
