// Import the functions you need from the SDKs you need
//import  firebase from "firebase/compat/app";
//import 'firebase/compat/auth'; //v9
import { getAnalytics } from "firebase/analytics";
//import 'firebase/compat/firestore'; //v9
import { initializeApp } from "firebase/app";
import "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {

  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL:process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId:  process.env.FIREBASE_APP_ID,
  measurementId:process.env.FIREBASE_MEASUREMENT_ID

};

// Initialize Firebase
let app;
if (firebase.apps.lenght===0){
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
}
else{
  app = firebase.app()
}

const auth=firebase.auth();
var defaultDatabase = firebase.database();
export {auth};
