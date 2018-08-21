import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    ngOnInit() {
      firebase.initializeApp({
        apiKey: "AIzaSyDXqo1tiaCBD16R5E7IE7krqP11YGovzqo",
        authDomain: "udemy-angular-my-first-app.firebaseapp.com",
      });
    }
}
