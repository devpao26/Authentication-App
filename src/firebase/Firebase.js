import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCe4qlVbrBzolk1glNpHjA-UEu8CH8FEX8 ",
    authDomain: "login-app.firebaseapp.com",
    databaseURL: "https://login-app.firebaseio.com/",
    storageBucket: "gs://login-app.appspot.com",
  };
  
 const firebaseApp  = firebase.initializeApp(config);

export default firebaseApp;
