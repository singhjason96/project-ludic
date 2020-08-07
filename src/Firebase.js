import app, { firestore } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyDjyFkDsIRERC5OHPULZUQdO8rkTpxoksA",
    authDomain: "project-lu-411aa.firebaseapp.com",
    databaseURL: "https://project-lu-411aa.firebaseio.com",
    projectId: "project-lu-411aa",
    storageBucket: "project-lu-411aa.appspot.com",
    messagingSenderId: "52820380246",
    appId: "1:52820380246:web:0dd6567e5fea889e7789f7",
    measurementId: "G-QD0P7T0R9K"
  };

  class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);
      this.auth = app.auth();
      this.db = app.firestore();
      this.database = app.database;
    }
  }

  export default new Firebase();