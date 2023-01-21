// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyDkw-Jw8VvOMPLdjTbuK7wjhCcE4lG4Wgo",
  // authDomain: "worknow-96d70.firebaseapp.com",
  // projectId: "worknow-96d70",
  // storageBucket: "worknow-96d70.appspot.com",
  // messagingSenderId: "417924937494",
  // appId: "1:417924937494:web:38b64cba5208c649734237",
  // measurementId: "G-6X77FJJ1L7"
  apiKey: Constants.manifest?.extra?.firebaseApiKey,
  authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
  projectId: Constants.manifest?.extra?.firebaseProjectId,
  storageBucket: Constants.manifest?.extra?.firebaseStorageBucket,
  messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
  appId: Constants.manifest?.extra?.firebaseAppId,
  measurementId:Constants.manifest?.extra?.firebaseMeasurementId

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;