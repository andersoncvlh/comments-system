import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDpp0eBbraxPr-Mllc4RhjmLK-Y5yKKQVk",
  authDomain: "comments-sample-23.firebaseapp.com",
  databaseURL: "https://comments-sample-23.firebaseio.com",
  projectId: "comments-sample-23",
  storageBucket: "comments-sample-23.appspot.com",
  messagingSenderId: "962266252243"
});

const db = firebase.database(firebaseApp);
const base = Rebase.createClass(db);

export const providers = {
  'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth();

export default base;
